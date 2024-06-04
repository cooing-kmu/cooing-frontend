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
import { tokenState, userState } from '../../utils/userAtom'
import { useLocation } from 'react-router-dom'

export default function ChattingRoom() {
  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser] = useRecoilState(userState)
  const [chatList, setChatList] = useState([])
  const [input, setInput] = useState('')
  const location = useLocation()
  const { roomId, recv } = location.state || {} // 전달받은 room과 recv 객체

  // useRef를 조건부가 아닌 항상 호출되도록 선언
  const roomRef = useRef()
  const sender = useRef(undefined)
  const socketList = useRef([])

  useEffect(() => {
    if (roomId && recv) {
      // 필요한 초기화 작업 수행
      roomRef.current = roomId // 예시
    }

    console.log(roomId, recv)
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

  const getChatList = async () => {
    if (!sender.current || !user) return undefined

    const userChatList = await fetch(
      `${DOMAIN_NAME}/chat/${sender.current.roomId}`,
      {
        headers: {
          Authorization: token,
        },
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

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const messageSubmitHandler = () => {
    if (!sender.current || !user || !input.trim()) {
      console.log('no sender or empty message')
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
        <Messages chatList={chatList} />
        <div className='input'>
          <input
            type='text'
            placeholder='메시지를 입력하세요.'
            value={input}
            onChange={handleInputChange} // 입력 변경 핸들러
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
