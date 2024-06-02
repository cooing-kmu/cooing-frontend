import React, { useState, useRef, useEffect } from 'react'
import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import TestLogin from './testLogin'
import ChatListBox from './ChatListBox'
import { DOMAIN_NAME } from '../../../App'

const ChatPage = () => {
  const host = '15.165.25.19'
  const [user, setUser] = useState(undefined)
  const recv = useRef()
  const [userList, setUserList] = useState([])
  const [userListTsx, setUserListTsx] = useState([])
  const [chatList, setChatList] = useState([])
  const sender = useRef(undefined)
  const socketList = useRef([])
  const [input, setInput] = useState('')

  const getCurrentSenderSocket = (receiver) => {
    for (let i = 0; i < socketList.current.length; i++) {
      const sock = socketList.current[i]
      if (sock.recvId === receiver.id) return sock
    }
    return undefined
  }

  //채팅방
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

    //채팅방
    const userChatList = await getChatList()
    if (!sender.current || !userChatList) return
    setChatList(() => userChatList)
    recv.current = _user
  }

  //채팅방
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
    //채팅 목록
    if (!user) return
    socketList.current.map((socket) => socket.socket.deactivate())
    socketList.current = []
    const _userList = []

    //채팅 목록
    userList.map(async (_user) => {
      _userList.push(
        <div onClick={() => handleRecv(_user)}>
          <div>{_user.username}</div>
        </div>
      )
      const room = await fetch(
        `${DOMAIN_NAME}/chatroom?userIdList=${user?.id},${_user.id}`,
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
          recvId: _user.id,
          roomId: roomId,
          socket: socket,
        })
      })
    })
    setUserListTsx(() => _userList)
  }, [userList])

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
  }

  return (
    <div>
      {!user && <TestLogin setUser={setUser} setUserList={setUserList} />}
      {user && userList && (
        <div>
          <div className='userListBoxContainer'>{userListTsx}</div>
          <ChatListBox user={user} chatList={chatList} />
          <div>
            <input type='text' onChange={(e) => setInput(e.target.value)} />
            <button onClick={messageSubmitHandler}>submit</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatPage
