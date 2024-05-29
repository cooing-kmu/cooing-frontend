import React from 'react'
import './ChattingList.css'
import ChattingListData from '../../data/ChattingListData'
import {
  ChattingContainer,
  ChattingCountContainer,
} from '../../components/chatting/BgComponent'
import theme from '../../Theme'

function truncateText(text, maxLength = 20, replacement = '...') {
  if (text?.length <= maxLength) {
    return text
  } else {
    return text?.slice(0, maxLength) + replacement
  }
}

const ChattingItem = (item) => {
  console.log(item)
  return (
    <ChattingContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '10px',
          width: '15%',
        }}
      >
        <img
          src={item.user.img}
          alt={item.user.name}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'fill',
          }} // 이미지에 상대적으로 더 많은 높이 할당
        />
      </div>

      <div style={{ textAlign: 'left', width: '73%' }}>
        <div
          style={{ fontSize: '20px', marginBottom: '5px', fontWeight: '500' }}
        >
          {item.user.name} {item.user.role}님
        </div>
        <div style={{ fontSize: '15px', color: `${theme.darkGray}` }}>
          {truncateText(item.recentMsg, 50)}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10px',
          width: '12%',
        }}
      >
        <div
          style={{
            fontSize: '10px',
            marginBottom: '10px',
            color: `${theme.darkGray}`,
            fontWeight: 700,
          }}
        >
          {item.recentMsgTime}
        </div>
        <div>
          <ChattingCountContainer>{item.recentMsgCount}</ChattingCountContainer>
        </div>
      </div>
    </ChattingContainer>
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
          <ChattingItem {...item} />
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
