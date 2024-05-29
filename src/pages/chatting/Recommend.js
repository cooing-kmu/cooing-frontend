import React from 'react'
import { RecommendContainer } from '../../components/chatting/BgComponent'
import UserData from '../../data/UserData'
import RecommendData from '../../data/RecommendData'

export default function Recommend() {
  const user = UserData[0]
  return (
    <RecommendContainer>
      <div
        style={{
          fontSize: '23px',
          width: '70%',
          textAlign: 'left',
          padding: '35px 22px 15px 22px',
          fontWeight: 'bold',
        }}
      >
        {user.name} {user.role}
        {user.role === '헨젤'
          ? '님의 고민을 해결해 줄 그레텔'
          : '님이 도움을 줄 수 있는 헨젤'}
        님과 대화를 나누어 보세요!
      </div>
      <div
        style={{
          margin: '5px 15px',
          display: 'flex', // flex로 설정하여 아이템들이 가로로 배열되도록 함
          flexDirection: 'row', // 가로 방향으로 아이템을 정렬
          overflowX: 'auto', // 가로 스크롤 활성화
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch', // iOS에서 스크롤 성능 향상
        }}
      >
        {RecommendData.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '15px',
              alignItems: 'center',
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'fill',
              }} // 이미지에 상대적으로 더 많은 높이 할당
            />
            <div style={{ textAlign: 'center', height: '20%' }}>
              {item.name}
            </div>
            {/* 텍스트 영역에도 고정된 높이를 할당하여, 전체 div 높이 내에서 정확한 비율 유지 */}
          </div>
        ))}
      </div>
    </RecommendContainer>
  )
}
