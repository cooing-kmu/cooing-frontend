import React, { useEffect, useRef, useState } from 'react'
import './Chatting.css'
import theme from '../../Theme'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { chatUserState, userListState, userState } from '../../utils/userAtom'
import user1 from '../../assets/images/user1.png'

const ChattingItem = (item) => {
  console.log(item)
  return (
    <div className='chatting-list'>
      <div className='chatting-list-img'>
        {item.profileImageUrl === 'string' ? (
          <img src={user1} alt={item.username} />
        ) : (
          <img src={item.profileImageUrl} alt={item.username} />
        )}
      </div>

      <div className='chatting-list-text'>
        <div className='chatting-list-name'>
          {item.username} {item.role}님
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

  // useEffect(() => {
  //   // 사용자 목록을 렌더링합니다.
  //   const _userListTsx = userList.map((_user) => (
  //     <Link
  //       to={`/chatting/room`}
  //       key={_user.id}
  //       style={{ textDecoration: 'none', color: 'black' }}
  //       onClick={() => {
  //         setChatUser(_user)
  //       }}
  //     >
  //       <ChattingItem {..._user} />
  //     </Link>
  //   ))
  //   setUserListTsx(_userListTsx)
  // }, [userList])
  console.log(userList)

  return (
    <div
      style={{
        overflowY: 'auto',
        height: '650px',
      }}
    >
      {userList.map((item, index) => (
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
            key={item.id}
            style={{
              textDecoration: 'none',
              color: 'black',
              width: '100%',
            }}
            onClick={() => {
              setChatUser(item)
            }}
          >
            <ChattingItem {...item} />
          </Link>
          <hr
            style={{
              margin: 0,
              width: '90%',
              border: 0,
              borderTop: `1px solid ${theme.orange} `,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default ChattingList
