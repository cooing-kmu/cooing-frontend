import React, { useEffect, useState } from 'react'
import whitePencil from '../../../assets/icons/icon-pencil-w.svg'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import defaultImage from '../../../assets/images/image-default.svg'
import * as style from './style/ClubStyle'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function Club() {
  const navigate = useNavigate()
  const [clubData, setClubData] = useState([])

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터를 가져오기 위해 useEffect 사용
    async function fetchData() {
      try {
        const response = await axios.get(`${DOMAIN_NAME}/clubs`, {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        })
        console.log('Fetched data:', response.data)
        setClubData(response.data.body) // 가져온 데이터를 상태에 설정
      } catch (error) {
        console.error('Error fetching board data:', error)
      }
    }
    fetchData()
  }, []) // 빈 배열을 넣어 한 번만 실행되도록 설정

  const handleBoardClick = (clubId) => {
    navigate(`/club-post/${clubId}`)
  }
  const handleWriteClick = () => {
    navigate('/club-write')
  }

  return (
    <style.Div>
      <Header title='동아리 및 소모임' />

      <style.MainContainer>
        {clubData.length > 0 &&
          clubData.map((item, index) => (
            <div
              key={item.clubId}
              onClick={() => handleBoardClick(item.clubId)}
            >
              <style.ContentsContainer key={item.clubId}>
                <style.TitleSummary>
                  <style.Text>동아리 이름</style.Text>
                  <style.Title>{item.title}</style.Title>
                  <style.Text>분야</style.Text>
                  <style.Summary>{item.summary}</style.Summary>
                </style.TitleSummary>
                {item.imageUrl ? (
                  <style.Img src={item.imageUrl} alt='club image' />
                ) : (
                  <style.Img src={defaultImage} alt='default club image' />
                )}
              </style.ContentsContainer>
            </div>
          ))}
      </style.MainContainer>

      <style.ButtonContainer>
        <style.Button onClick={handleWriteClick}>
          <img src={whitePencil} alt='white pen' />
          글쓰기
        </style.Button>
      </style.ButtonContainer>
    </style.Div>
  )
}
