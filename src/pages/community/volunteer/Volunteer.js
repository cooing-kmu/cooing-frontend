import React, { useEffect, useState } from 'react'
import whitePencil from '../../../assets/icons/icon-pencil-w.svg'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './style/VolunteerStyle'
import axios from 'axios'

export default function Volunteer() {
  const navigate = useNavigate()
  const [volunteerData, setVolunteerData] = useState([])

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터를 가져오기 위해 useEffect 사용
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}volunteers`,
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
        )
        setVolunteerData(response.data.body) // 가져온 데이터를 상태에 설정
      } catch (error) {
        console.error('Error fetching board data:', error)
      }
    }
    fetchData()
  }, []) // 빈 배열을 넣어 한 번만 실행되도록 설정

  const handleBoardClick = (volunteerId) => {
    navigate(`/volunteer-post/${volunteerId}`)
  }

  const handleWriteClick = () => {
    navigate('/volunteer-write')
  }

  return (
    <style.Div>
      <Header title='봉사활동' />

      <style.MainContainer>
        {volunteerData.length > 0 &&
          volunteerData.map((item, index) => (
            <div
              key={item.volunteerId}
              onClick={() => handleBoardClick(item.volunteerId)}
            >
              <style.ContentsContainer>
                <style.TitleSummary key={index.volunteerId}>
                  <style.Location>
                    <style.Text>봉사지역 : </style.Text>
                    <style.Title>{item.title}</style.Title>
                  </style.Location>
                  <style.Location>
                    <style.Text>활동분야 : </style.Text>
                    <style.Summary>{item.summary}</style.Summary>
                  </style.Location>
                </style.TitleSummary>
                <style.Time>{item.createDatetime}</style.Time>
              </style.ContentsContainer>
            </div>
          ))}
      </style.MainContainer>

      <style.ButtonContainer>
        <style.Button onClick={handleWriteClick}>
          <img src={whitePencil} alt={'white pen'} />
          글쓰기
        </style.Button>
      </style.ButtonContainer>
    </style.Div>
  )
}
