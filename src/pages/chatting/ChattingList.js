import React from 'react'
import './Chatting.css'
import ChattingListData from '../../data/ChattingListData'
import theme from '../../Theme'
import { Link } from 'react-router-dom'

const ChattingItem = (item) => {
  console.log(item)
  return (
    <div className='chatting-list'>
      <div className='chatting-list-img'>
        <img
          src={item.user.profileImageUrl}
          alt={item.user.username}
          // 이미지에 상대적으로 더 많은 높이 할당
        />
      </div>

      {/*<div className='chatting-list-text'>*/}
      {/*  <div className='chatting-list-name'>*/}
      {/*    {item.user.username} {item.user.role}님*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className='chatting-list-msg'*/}
      {/*    style={{ color: `${theme.darkGray}` }}*/}
      {/*  >*/}
      {/*    {item.recentMsg}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className='chatting-list-content'>*/}
      {/*  <div*/}
      {/*    className='chatting-list-time'*/}
      {/*    style={{ color: `${theme.darkGray}` }}*/}
      {/*  >*/}
      {/*    {item.recentMsgTime}*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className='chatting-list-count'*/}
      {/*    style={{ backgroundColor: `${theme.red}` }}*/}
      {/*  >*/}
      {/*    {item.recentMsgCount}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default function ChattingList() {
  return (
    <div style={{ overflowY: 'auto', height: '60%' }}>
      {ChattingListData.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link
            to={`/chatting/room`}
            style={{ textDecoration: 'none', color: 'black' }}
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
