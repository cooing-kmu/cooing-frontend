import './Chatting.css'
import backIcon from '../../assets/icons/icon-arrow-left.svg'
import moreIcon from '../../assets/icons/icon-more-wh.svg'
import Messages from './Messages'
import React, { useEffect, useRef, useState } from 'react'
import { DOMAIN_NAME } from '../../App'
import { Stomp } from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import theme from '../../Theme'
import sendIcon from '../../assets/icons/icon-send.svg'
import { useRecoilState } from 'recoil'
import { chatUserState, userState } from '../../utils/userAtom'
export default function ChattingRoom() {
  const [user, setUser] = useRecoilState(userState)
  const [chatUser, setChatUser] = useRecoilState(chatUserState)
  const [chatList, setChatList] = useState([])
  const [input, setInput] = useState('')
  const recv = useRef()
  const sender = useRef(undefined)
  const socketList = useRef([])

  console.log('user', user, 'chatUser', chatUser)
  const getCurrentSenderSocket = (receiver) => {
    for (let i = 0; i < socketList.current.length; i++) {
      const sock = socketList.current[i]
      if (sock.recvId === receiver.id) return sock
    }
    return undefined
  }

  const getChatList = async () => {
    if (!sender.current || !user) return undefined

    const userChatList = await fetch(
      `${DOMAIN_NAME}/chat/${sender.current.roomId}`,
      {
        credentials: 'include',
      }
    )
      .then(async (res) => (await res.json()).body)
      .catch((err) => {
        console.log(err)
        return undefined
      })

    if (!userChatList) return undefined

    for (let i = 0; i < userChatList.length; i++) {
      const chat = userChatList[i]
      if (chat.unread > 0 && chat.userId !== user?.id) {
        sender.current.socket.send(
          `/app/chat/${chat.id}`,
          {},
          JSON.stringify({
            id: chat.id,
            senderId: user.id,
            unread: chat.unread,
          })
        )
      }
    }
    return userChatList
  }

  const handleRecv = async (_user) => {
    if (!user) return
    sender.current = getCurrentSenderSocket(_user)
    const userChatList = await getChatList()
    if (!sender.current || !userChatList) return
    setChatList(() => userChatList)
    recv.current = _user
  }

  function updateChatUnread(chatMessage) {
    console.log('update chat unread')
    setChatList((currentChatList) => {
      if (currentChatList.length === 0) {
        return currentChatList
      }
      return currentChatList.map((chat) =>
        chat.id === chatMessage.id
          ? { ...chat, unread: chatMessage.unread }
          : chat
      )
    })
  }

  useEffect(() => {
    if (!user) return
    socketList.current.map((socket) => socket.socket.deactivate())
    socketList.current = []

    console.log(user.id, chatUser)
    handleRecv(chatUser)

    const fetchRoomInfo = async () => {
      const room = await fetch(
        `${DOMAIN_NAME}/chatroom?userIdList=${user?.id},${chatUser.id}`,
        {
          credentials: 'include',
        }
      )
        .then(async (res) => (await res.json()).body)
        .catch((err) => console.log(err))
      const roomId = room.id
      const socket = Stomp.over(() => {
        const sock = new SockJS(`${DOMAIN_NAME}/ws`)
        return sock
      })
      socket.connect({ user: user.id }, async () => {
        const decoder = new TextDecoder('utf-8')
        console.log(`/queue/chatting/${roomId}`)
        socket.subscribe(`/queue/chatting/${roomId}`, (message) => {
          if (!recv.current || !sender.current) return
          const userMessage = JSON.parse(decoder.decode(message.binaryBody))
          const newChat = {
            id: userMessage.chatId,
            unread: 1,
            userId: userMessage.senderId,
            chatRoomId: roomId,
            content: userMessage.content,
          }
          console.log(userMessage)
          if (sender.current.roomId === newChat.chatRoomId) {
            setChatList((prev) => [...prev, newChat])
            if (newChat.chatRoomId === roomId && newChat.userId !== user.id) {
              socket.send(
                `/app/chat/${newChat.id}`,
                {},
                JSON.stringify({
                  id: newChat.id,
                  senderId: user.id,
                  unread: newChat.unread,
                })
              )
            }
          }
        })
        socket.subscribe(`/queue/chat/`, (message) => {
          const chatMessage = JSON.parse(decoder.decode(message.binaryBody))
          console.log(chatMessage)
          updateChatUnread(chatMessage)
        })
        socketList.current.push({
          recvId: chatUser.id,
          roomId: roomId,
          socket: socket,
        })
      })
    }

    fetchRoomInfo()
  }, [user, chatUser])

  //채팅방
  const messageSubmitHandler = () => {
    if (!sender.current || !user) {
      console.log('no sender')
      return
    }
    sender.current.socket.send(
      '/app/chatting',
      {},
      JSON.stringify({
        roomId: sender.current.roomId,
        senderId: user.id,
        content: input,
      })
    )
    setInput('')
  }

  return (
    <div className='chatting-room'>
      <div className='chatting-room-header'>
        <img src={backIcon} alt={'뒤로가기'} />
        <span>{chatUser.username}님 </span>
        <img src={moreIcon} alt='더보기' />
      </div>
      <div className='chatting-room-chat'>
        <Messages chatList={chatList} />
        <div className='input'>
          <input
            type='text'
            placeholder='메시지를 입력하세요.'
            style={{ color: `${theme.gray}` }}
          />
          <div className='send'>
            <button onClick={messageSubmitHandler}>
              <img src={sendIcon} alt='보내기버튼' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
