import './Chatting.css'
import backIcon from '../../assets/icons/icon-arrow-left.svg'
import moreIcon from '../../assets/icons/icon-more-wh.svg'
import userIcon from '../../assets/icons/icon-user.svg'
import React, { useEffect, useRef, useState } from 'react'
import { DOMAIN_NAME } from '../../App'
import { Stomp } from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import sendIcon from '../../assets/icons/icon-send.svg'
import { useRecoilState } from 'recoil'
import { tokenState, userState } from '../../utils/userAtom'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ChattingRoom() {
  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser] = useRecoilState(userState)
  const [chatList, setChatList] = useState([])
  const [input, setInput] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { roomId, recv } = location.state || {} // 전달받은 room과 recv 객체

  const roomRef = useRef()
  const sender = useRef(undefined)
  const socketList = useRef([])

  const messageEndRef = useRef()

  useEffect(() => {
    if (roomId && recv) {
      // 필요한 초기화 작업 수행
      roomRef.current = roomId
      handleRecv(recv)
    }

    console.log(roomId, recv)

    const fetchInitChatList = async () => {
      const initChatList = await fetch(`${DOMAIN_NAME}/chat/${roomId}`)
        .then((res) => res.json())
        .then((data) => data.body)
        .catch((err) => console.log(err))

      setChatList(initChatList)
      scrollChatToBottom()

      socketList.current.push({
        recvId: recv.id,
        roomId: roomId,
        socket: socket,
      })
      messageEndRef.current.scrollIntoView({ block: 'end' })
    }

    fetchInitChatList()

    const socket = Stomp.over(() => {
      return new SockJS(`${DOMAIN_NAME}/ws`)
    })
    socket.connect({ user: user.id }, async () => {
      const decoder = new TextDecoder('utf-8')
      console.log(`/queue/chatting/${roomId}`)
      sender.current = { socket: socket, roomId: roomId, userId: user.id }

      console.log(sender.current)
      socket.subscribe(`/queue/chatting/${roomId}`, (message) => {
        if (!sender.current) return
        const userMessage = JSON.parse(decoder.decode(message.binaryBody))
        console.log(userMessage)
        handleRecv(recv)
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

    scrollChatToBottom()
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

  function scrollChatToBottom() {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
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
    // sender.current와 sender.current.socket이 유효한지 확인
    if (!sender.current) {
      console.log('no sender')
      return
    } else if (!sender.current.socket) {
      console.log('socket disconnected')
    }
    console.log(sender.current)
    const now = new Date()

    // 년도, 월, 일을 각각 추출합니다.
    const year = now.getFullYear()
    // getMonth()는 0에서 시작하므로 1을 더해줍니다. 또한, 10보다 작은 경우 앞에 '0'을 붙여줍니다.
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')

    // 시간과 분을 각각 추출합니다.
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')

    // 위에서 추출한 값을 조합하여 최종 문자열을 생성합니다.
    const dateTimeFormat = `${year}-${month}-${day} ${hours}:${minutes}`

    console.log(dateTimeFormat)
    sender.current.socket.send(
      '/app/chatting',
      {},
      JSON.stringify({
        roomId: sender.current.roomId,
        senderId: user.id,
        content: input,
        createdAt: dateTimeFormat,
      })
    )
    setInput('') // 메시지 전송 후 입력 필드 초기화
    handleRecv(recv)
    scrollChatToBottom()
  }
  return (
    <div className='chatting-room'>
      <div className='chatting-room-header'>
        <img src={backIcon} alt={'뒤로가기'} onClick={() => navigate(-1)} />
        <span>{recv.username}님 </span>
        <img src={moreIcon} alt='더보기' />
      </div>
      <div className='chatting-room-chat'>
        <div className='messages'>
          {chatList.map((chat) => (
            <div
              className={chat.userId === user?.id ? 'message owner' : 'message'}
              key={`${chat.id}-${chat.userId}-${chat.unread}`}
            >
              <div className='message-user'>
                {chat.userId === user?.id ? (
                  user.profileImageUrl ? (
                    <img src={user.profileImageUrl} alt='user' />
                  ) : (
                    <img src={userIcon} alt='user' />
                  )
                ) : !recv.profileImageUrl ? (
                  <img src={recv.profileImageUrl} alt='user' />
                ) : (
                  <img src={userIcon} alt='user' />
                )}
              </div>
              <div
                className={
                  chat.userId === user?.id
                    ? 'message-content owner'
                    : 'message-content'
                }
              >
                {' '}
                <div
                  className={
                    chat.userId === user?.id
                      ? 'message-content-main owner'
                      : 'message-content-main'
                  }
                >
                  <div
                    className={
                      chat.userId === user?.id
                        ? 'message-content-text owner'
                        : 'message-content-text'
                    }
                  >
                    {chat.content}
                  </div>
                  {chat.unread > 0 ? <span>{chat.unread}</span> : null}
                </div>
                <span>{chat.createdAt}</span>
              </div>
            </div>
          ))}
          <div ref={messageEndRef}></div>
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder='메시지를 입력하세요.'
            value={input}
            onChange={handleInputChange} // 입력 변경 핸들러
            onKeyDown={handleKeyPress}
          />
          <div className='send'>
            <button
              onClick={() => {
                messageSubmitHandler()
                scrollChatToBottom()
              }}
            >
              <img src={sendIcon} alt='보내기버튼' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
