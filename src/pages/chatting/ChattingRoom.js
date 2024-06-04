import './Chatting.css'
import backIcon from '../../assets/icons/icon-arrow-left.svg'
import moreIcon from '../../assets/icons/icon-more-wh.svg'
import Messages from './Messages'
import React, { useEffect, useRef, useState } from 'react'
import { DOMAIN_NAME } from '../../App'
import { Stomp } from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import sendIcon from '../../assets/icons/icon-send.svg'
import { useRecoilState } from 'recoil'
import { tokenState, userState } from '../../utils/userAtom'
import { useLocation } from 'react-router-dom'

export default function ChattingRoom() {
  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser] = useRecoilState(userState)
  const [chatList, setChatList] = useState([])
  const [input, setInput] = useState('')
  const location = useLocation()
  const { roomId, recv } = location.state || {} // 전달받은 room과 recv 객체

  const roomRef = useRef()
  const sender = useRef(undefined)
  const socketList = useRef([])

  useEffect(() => {
    if (roomId && recv) {
      // 필요한 초기화 작업 수행
      roomRef.current = roomId
      handleRecv(recv)
    }

    console.log(roomId, recv)

    const socket = Stomp.over(() => {
      return new SockJS(`${DOMAIN_NAME}/ws`)
    })
    socket.connect({ user: user.id }, async () => {
      const decoder = new TextDecoder('utf-8')
      console.log(`/queue/chatting/${roomId}`)
      socket.subscribe(`/queue/chatting/${roomId}`, (message) => {
        if (!sender.current) return
        const userMessage = JSON.parse(decoder.decode(message.binaryBody))
        const newChat = {
          id: userMessage.chatId,
          unread: 1,
          userId: userMessage.senderId,
          chatRoomId: roomId,
          content: userMessage.content,
          createdAt: userMessage.createdAt,
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
        recvId: recv.id,
        roomId: roomId,
        socket: socket,
      })
    })

    return () => {
      if (sender.current && sender.current.socket) {
        sender.current.socket.disconnect(() => {
          console.log('Disconnected')
        })
      }
    }
  }, [roomId, recv])

  if (!roomId || !recv) {
    return <div>유효하지 않은 접근입니다.</div>
  }
  const getCurrentSenderSocket = (receiver) => {
    for (let i = 0; i < socketList.current.length; i++) {
      const sock = socketList.current[i]
      console.log(sock)
      if (sock.recvId === receiver.id) return sock
    }

    return undefined
  }

  const handleRecv = async (_user) => {
    if (!user) return
    sender.current = getCurrentSenderSocket(_user)

    //채팅방
    const userChatList = await getChatList()
    if (!sender.current || !userChatList) return
    setChatList(() => userChatList)

    console.log(chatList)
  }

  const getChatList = async () => {
    if (!sender.current || !user) return undefined

    const userChatList = await fetch(
      `${DOMAIN_NAME}/chat/${sender.current.roomId}`
    )
      .then(async (res) => (await res.json()).body)
      .catch((err) => {
        console.log(err)
        return undefined
      })

    if (!userChatList) return undefined

    for (let i = 0; i < userChatList.length; i++) {
      const chat = userChatList[i]
      console.log(chat)
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

  function updateChatUnread(chatMessage) {
    console.log('update chat unread')
    setChatList((currentChatList) => {
      if (currentChatList.length === 0) {
        return currentChatList
      }

      console.log(currentChatList)
      return currentChatList.map((chat) =>
        chat.id === chatMessage.id
          ? { ...chat, unread: chatMessage.unread }
          : chat
      )
    })
  }

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      messageSubmitHandler()
    }
  }

  const messageSubmitHandler = () => {
    if (!sender.current || !user || !input.trim()) {
      console.log('no sender or empty message')
      return
    }

    // STOMP 연결 확인
    if (!sender.current.socket.connected) {
      console.log('STOMP connection is not established')
      return
    }

    // 현재 시간을 00:00 형식으로 변환
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const formattedTime = `${hours}:${minutes}`

    sender.current.socket.send(
      '/app/chatting',
      {},
      JSON.stringify({
        roomId: sender.current.roomId,
        senderId: user.id,
        content: input,
        createdAt: formattedTime,
      })
    )
    setInput('') // 메시지 전송 후 입력 필드 초기화
  }

  return (
    <div className='chatting-room'>
      <div className='chatting-room-header'>
        <img src={backIcon} alt={'뒤로가기'} />
        <span>{recv.username}님 </span>
        <img src={moreIcon} alt='더보기' />
      </div>
      <div className='chatting-room-chat'>
        <Messages chatList={chatList} recvImage={recv.profileImageUrl} />
        <div className='input'>
          <input
            type='text'
            placeholder='메시지를 입력하세요.'
            value={input}
            onChange={handleInputChange} // 입력 변경 핸들러
            onKeyDown={handleKeyPress}
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
