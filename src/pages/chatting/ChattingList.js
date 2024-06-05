import React, { useEffect, useRef, useState } from 'react'
import './Chatting.css'
import theme from '../../Theme'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { tokenState, userState } from '../../utils/userAtom'
import userIcon from '../../assets/icons/icon-user.svg'
import { DOMAIN_NAME } from '../../App'
import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import axios from 'axios'

function formatDateTime(input) {
  // 입력값을 Date 객체로 파싱합니다.
  const inputDate = new Date(input)
  const now = new Date()

  // 오늘 날짜만 있는 Date 객체를 생성합니다 (시간은 00:00으로 설정).
  const todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  )

  // 입력된 날짜가 오늘 자정 이전인지 확인합니다.
  if (inputDate >= todayMidnight) {
    // 자정 이전이면 시간과 분을 반환합니다.
    const hours = String(inputDate.getHours()).padStart(2, '0')
    const minutes = String(inputDate.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
  } else {
    // 자정을 지났으면 날짜를 반환합니다.
    const year = inputDate.getFullYear()
    const month = String(inputDate.getMonth() + 1).padStart(2, '0') // getMonth()는 0부터 시작하므로 1을 더해줍니다.
    const day = String(inputDate.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
}

const ChattingItem = ({ recv, room }) => {
  return (
    <div className='chatting-list'>
      <div className='chatting-list-img'>
        {!recv.profileImageUrl ? (
          <img src={userIcon} alt={recv.username} />
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
          {formatDateTime(room.lastUpdate)}
        </div>

        <div
          className='chatting-list-count'
          style={{
            backgroundColor:
              room.unreadChat > 0 ? `${theme.red}` : 'transparent',
          }}
        >
          {room.unreadChat > 0 && room.unreadChat}
        </div>
      </div>
    </div>
  )
}

const ChattingList = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser] = useRecoilState(userState)
  const [rooms, setRooms] = useState([])
  const socketList = useRef(null)
  const navigate = useNavigate()

  // console.log(chatUser)
  useEffect(() => {
    const roomInfo = async () => {
      try {
        const roomData = await axios
          .get(`${DOMAIN_NAME}/chatroom?sender=1`, {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          })
          .then((res) => res.data.body)

        if (!roomData) return

        if (!socketList.current) {
          const socket = Stomp.over(() => new SockJS(`${DOMAIN_NAME}/ws`))
          socket.connect({ user: user.id }, () => {
            roomData.forEach((room) => {
              const decoder = new TextDecoder('utf-8')
              socket.subscribe(`/queue/chatting/${room.id}`, (message) => {
                const userMessage = JSON.parse(
                  decoder.decode(message.binaryBody)
                )
              })
            })
          })
          socketList.current = socket
        }

        const roomComponents = await Promise.all(
          roomData.map(async (room) => {
            const recv = await axios
              .get(`${DOMAIN_NAME}/user/${room.receiverId}`, {
                headers: {
                  Authorization: window.localStorage.getItem('Authorization'),
                },
              })
              .then((res) => res.data.body)

            return room.lastChat ? (
              <div
                key={room.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div
                  onClick={() =>
                    navigate('/chatting/room', {
                      state: { roomId: room.id, recv: recv },
                    })
                  }
                  style={{ width: '100%' }}
                >
                  {' '}
                  <ChattingItem recv={recv} room={room} />
                </div>

                <hr
                  style={{
                    margin: 0,
                    width: '90%',
                    border: 0,
                    borderTop: `1px solid ${theme.orange}`,
                  }}
                />
              </div>
            ) : null
          })
        )

        setRooms(roomComponents)
      } catch (error) {
        console.error('Failed to fetch chat rooms', error)
      }
    }

    roomInfo()

    // return () => {
    //   if (socketList.current) {
    //     socketList.current.disconnect()
    //   }
    // }
  }, [user])

  return (
    <div
      style={{
        overflowY: 'auto',
        height: '650px',
      }}
    >
      {rooms}
    </div>
  )
}

export default ChattingList
