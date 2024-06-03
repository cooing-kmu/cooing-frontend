import React, { useEffect, useState } from 'react'
import './Chatting.css'
import theme from '../../Theme'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { chatUserState, userListState } from '../../utils/userAtom'
import user1 from '../../assets/images/user1.png'
import { DOMAIN_NAME } from '../../App'

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
  const [chatUser, setChatUser] = useRecoilState(chatUserState)
  const [userList, setUserList] = useRecoilState(userListState)
  const [userListTsx, setUserListTsx] = useState([])

  console.log(chatUser)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${DOMAIN_NAME}/users`, {
          credentials: 'include',
        })
        const data = await response.json()
        const users = data.body

        console.log(users)
        if (!users) return

        const lst = users.map((user, index) => (
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
              key={user.id}
              style={{
                textDecoration: 'none',
                color: 'black',
                width: '100%',
              }}
              onClick={() => {
                setChatUser(user)
                console.log(chatUser)
              }}
            >
              <ChattingItem {...user} />
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
        setUserListTsx(lst)
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }

    fetchUsers()
  }, [userList, chatUser])

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
