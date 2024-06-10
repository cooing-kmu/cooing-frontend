import React, { useEffect, useState } from 'react'
import userIcon from '../../assets/icons/icon-user.svg'
import './Chatting.css'
import { useRecoilState } from 'recoil'
import { userState } from '../../Atom'
import concernIcon from '../../assets/icons/icon-concern.svg'
import interestIcon from '../../assets/icons/icon-heart.svg'
import { DOMAIN_NAME } from '../../App'
import { useNavigate } from 'react-router-dom'

export default function Recommend() {
  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()

  console.log(user)
  const [currentRecommend, setCurrentRecommend] = useState(true)
  const icon = currentRecommend ? concernIcon : interestIcon
  const recommendText = currentRecommend
    ? `${user.username} ${user.roleType}님과 비슷한 관심사를 가진 헨젤•그레텔님과 대화를 나누어 보세요!`
    : `${user.username} ${user.roleType}${
        user.roleType === '헨젤'
          ? '님의 고민을 해결해 줄 그레텔'
          : '님이 도움을 줄 수 있는 헨젤'
      }님과 대화를 나누어 보세요!`
  const [recommendUserList, setRecommendUserList] = useState([])

  console.log(user)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${DOMAIN_NAME}/user/suggestions?userId=${user.id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
        )
        const data = await response.json()
        const users = data.body

        console.log(data)
        console.log(users)

        setRecommendUserList(users)
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }

    fetchUsers()
  }, [currentRecommend])

  return (
    <div className='recommend'>
      <div className='recommend-header'>
        <div className='recommend-text'>{recommendText}</div>
        <div className='recommend-icon'>
          <img
            src={icon}
            alt={icon}
            style={{ height: '35px', width: '35px' }}
            onClick={() => setCurrentRecommend(!currentRecommend)}
          />
        </div>
      </div>
      <div className='recommend-list'>
        {recommendUserList ? (
          recommendUserList.map((item, index) => (
            <div
              key={index}
              className='recommend-list-user'
              onClick={() => navigate(`/user-info/${item.id}`)}
            >
              {item.profileImageUrl ? (
                <img src={item.profileImageUrl} alt='user' />
              ) : (
                <img src={userIcon} alt='user' />
              )}
              <div
                className='recommend-list-user-text'
                style={{ textAlign: 'center', height: '20%' }}
              >
                {item.username}
              </div>
              {/* 텍스트 영역에도 고정된 높이를 할당하여, 전체 div 높이 내에서 정확한 비율 유지 */}
            </div>
          ))
        ) : (
          <div>유저 데이터가 없습니다.</div>
        )}
      </div>
    </div>
  )
}
