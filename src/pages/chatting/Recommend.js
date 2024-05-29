import React from 'react'
import UserData from '../../data/UserData'
import RecommendData from '../../data/RecommendData'
import theme from '../../Theme'
import './Chatting.css'

export default function Recommend() {
  const user = UserData[0]
  return (
    <div className='recommend'>
      <div className='recommend-text'>
        {user.name} {user.role}
        {user.role === '헨젤'
          ? '님의 고민을 해결해 줄 그레텔'
          : '님이 도움을 줄 수 있는 헨젤'}
        님과 대화를 나누어 보세요!
      </div>
      <div className='recommend-list'>
        {RecommendData.map((item, index) => (
          <div key={index} className='recommend-list-user'>
            <img
              src={item.img}
              alt={item.name}
              // 이미지에 상대적으로 더 많은 높이 할당
            />
            <div style={{ textAlign: 'center', height: '20%' }}>
              {item.name}
            </div>
            {/* 텍스트 영역에도 고정된 높이를 할당하여, 전체 div 높이 내에서 정확한 비율 유지 */}
          </div>
        ))}
      </div>
    </div>
  )
}
