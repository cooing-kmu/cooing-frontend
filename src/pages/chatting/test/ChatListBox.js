import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import { DOMAIN_NAME } from '../../../App'

const ChatListBox = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(undefined)
  const [chatList, setChatList] = useState([])
  const [input, setInput] = useState('')

  const sender = useRef(undefined)
  const socketList = useRef([])

  // 사용자 정보를 불러오는 로직
  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`${DOMAIN_NAME}/user/${userId}`, {
        credentials: 'include', // 쿠키 등의 인증 정보를 요청에 포함
      })
      const data = await response.json()
      if (response.ok) {
        setUser(data) // 응답으로 받은 사용자 정보를 상태에 설정
      } else {
        console.error('Failed to fetch user info:', data.message)
      }
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
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
    if (!userId) return // userId가 없으면 바로 반환

    fetchUserInfo(userId).then((data) => setUser(data))

    socketList.current.map((socket) => socket.socket.deactivate())
    socketList.current = []

    //채팅 목록
    userList.map(async (_user) => {
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
  }, [userId])

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
    <div className='chatListBoxContainer'>
      {chatList.map((chat) => (
        <div
          className={chat.userId === user?.id ? 'sendChat' : 'recvChat'}
          key={`${chat.id}-${chat.userId}-${chat.unread}`}
        >
          <div>{chat.unread}</div>
          <div>{chat.content}</div>
        </div>
      ))}
      <div>
        <input type='text' onChange={(e) => setInput(e.target.value)} />
        <button onClick={messageSubmitHandler}>submit</button>
      </div>
    </div>
  )
}

export default ChatListBox
