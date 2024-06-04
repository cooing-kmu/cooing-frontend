import React, { useEffect, useRef, useState } from 'react'
import './Chatting.css'
import theme from '../../Theme'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {
  chatUserState,
  tokenState,
  userListState,
  userState,
} from '../../utils/userAtom'
import user1 from '../../assets/images/user1.png'
import { DOMAIN_NAME } from '../../App'
import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import axios from 'axios'

const ChattingItem = ({ recv, room }) => {
  return (
    <div className='chatting-list'>
      <div className='chatting-list-img'>
        {!recv.profileImageUrl ? (
          <img src={user1} alt={recv.username} />
        ) : (
          <img src={recv.profileImageUrl} alt={recv.username} />
        )}
      </div>

      <div className='chatting-list-text'>
        <div className='chatting-list-name'>
          {recv.username} {recv.roleType}님
        </div>
        <div
          className='chatting-list-msg'
          style={{ color: `${theme.darkGray}` }}
        >
          {room.lastChat}
        </div>
      </div>
      <div className='chatting-list-content'>
        <div
          className='chatting-list-time'
          style={{ color: `${theme.darkGray}` }}
        >
          {room.lastUpdate}
        </div>

        <div
          className='chatting-list-count'
          style={{ backgroundColor: `${theme.red}` }}
        >
          {room.unreadChat}
        </div>
      </div>
    </div>
  )
}

const ChattingList = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser] = useRecoilState(userState)
  const [chatUser, setChatUser] = useRecoilState(chatUserState)
  const [userListTsx, setUserListTsx] = useState([])
  const socketList = useRef(null)

  // console.log(chatUser)
  useEffect(() => {
    const roomInfo = async () => {
      //로그인 유저의 현재 채팅방 목록 조회
      const roomData = await axios
        .get(`${DOMAIN_NAME}/chatroom?sender=2`, {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        })
        .then((res) => res.data.body)

      console.log(roomData)

      if (!roomData) return

      if (!socketList.current) {
        const socket = Stomp.over(() => new SockJS(`${DOMAIN_NAME}/ws`))
        socket.connect({ user: user.id }, () => {
          roomData.forEach((room) => {
            const decoder = new TextDecoder('utf-8')
            socket.subscribe(`/queue/chatting/${room.id}`, (message) => {
              const userMessage = JSON.parse(decoder.decode(message.binaryBody))
              const newChat = {
                id: userMessage.chatId,
                unread: 1,
                userId: userMessage.senderId,
                chatRoomId: room.id,
                content: userMessage.content,
              }
              console.log(newChat)
            })
          })
        })
        socketList.current = socket
      }

      const roomComponents = await Promise.all(
        roomData.map(async (room, index) => {
          const recv = await axios
            .get(`${DOMAIN_NAME}/user/${room.receiverId}`, {
              headers: {
                Authorization: window.localStorage.getItem('Authorization'),
              },
            })
            .then((res) => res.data.body)

          console.log(recv)
          return (
            room.lastChat && (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Link
                  to={`/chatting/room`}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    width: '100%',
                  }}
                  onClick={() => {
                    console.log(chatUser)
                  }}
                >
                  <ChattingItem recv={recv} room={room} />
                </Link>
                <hr
                  style={{
                    margin: 0,
                    width: '90%',
                    border: 0,
                    borderTop: `1px solid ${theme.orange}`,
                  }}
                />
              </div>
            )
          )
        })
      )

      setUserListTsx(roomComponents)
    }

    roomInfo()
  }, [user])

  return (
    <div
      style={{
        overflowY: 'auto',
        height: '650px',
      }}
    >
      {userListTsx}
    </div>
  )
}

export default ChattingList
