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

const ChattingItem = ({ profileImageUrl, username, role }) => {
  return (
    <div className='chatting-list'>
      <div className='chatting-list-img'>
        {!profileImageUrl ? (
          <img src={user1} alt={username} />
        ) : (
          <img src={profileImageUrl} alt={username} />
        )}
      </div>

      <div className='chatting-list-text'>
        <div className='chatting-list-name'>
          {username} {role}님
        </div>
        <div
          className='chatting-list-msg'
          style={{ color: `${theme.darkGray}` }}
        >
          안녕안녕
          {/*{item.recentMsg}*/}
        </div>
      </div>
      <div className='chatting-list-content'>
        <div
          className='chatting-list-time'
          style={{ color: `${theme.darkGray}` }}
        >
          2분 전{/*{item.recentMsgTime}*/}
        </div>
        <div
          className='chatting-list-count'
          style={{ backgroundColor: `${theme.red}` }}
        >
          3{/*{item.recentMsgCount}*/}
        </div>
      </div>
    </div>
  )
}

const ChattingList = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser] = useRecoilState(userState)
  const [chatUser, setChatUser] = useRecoilState(chatUserState)
  const [userList, setUserList] = useRecoilState(userListState)
  const [userListTsx, setUserListTsx] = useState([])
  const socketList = useRef([])
  // console.log(chatUser)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${DOMAIN_NAME}/users`, {
          headers: {
            Authorization: token,
          },
        })
        const data = await response.json()
        const users = data.body

        console.log(users)

        if (!users) return

        // Promise.all을 사용하여 모든 비동기 작업이 완료될 때까지 기다립니다.
        const lst = await Promise.all(
          users.map(async (recv, index) => {
            const room = await axios
              .get(
                `http://15.165.25.19:8080/chatroom?userIdList=${user.id}, ${recv.id}`,
                {
                  headers: {
                    Authorization: window.localStorage.getItem('Authorization'),
                  },
                }
              )
              .then((res) => res.data.body)

            // SockJS와 Stomp 설정은 비동기 작업의 결과에 직접적으로 영향을 주지 않으므로,
            // 이 부분은 제외하고, 필요한 데이터만 상태로 관리합니다.
            const socket = Stomp.over(() => {
              const sock = new SockJS('http://15.165.25.19:8080/ws')
              return sock
            })
            socket.connect({ user: recv.id }, async () => {
              const decoder = new TextDecoder('utf-8')
              socket.subscribe(`/queue/chatting/${room.id}`, (message) => {
                const userMessage = JSON.parse(
                  decoder.decode(message.binaryBody)
                )
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
            socketList.current.push(socket)
            // 컴포넌트를 반환하는 대신 필요한 정보를 객체로 반환합니다.
            return {
              recv,
              index,
            }
          })
        )

        // 모든 비동기 작업이 완료된 후, 상태 업데이트
        setUserListTsx(
          lst.map(({ recv, index }) => (
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
                key={recv.id}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  width: '100%',
                }}
                onClick={() => {
                  setChatUser(recv)
                  console.log(chatUser)
                }}
              >
                <ChattingItem {...recv} />
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
          ))
        )
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }

    fetchUsers()
  }, [userList]) // 의존성 배열에 userList를 포함

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
