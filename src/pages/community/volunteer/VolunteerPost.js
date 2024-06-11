import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './style/VolunteerPostStyle'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function VolunteerPost() {
  const { volunteerId } = useParams()
  const [volunteerData, setVolunteerData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${DOMAIN_NAME}/volunteer/${volunteerId}`,
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
        )
        setVolunteerData(response.data.body)
      } catch (error) {
        console.error('스터디 데이터를 불러오는 중 오류 발생:', error)
      }
    }
    fetchData()
  }, [volunteerId])

  return (
    <style.Div>
      <Header title='글쓰기' />

      <style.Container>
        <style.Title>
          <style.TextContainer>
            <style.Text>봉사 지역</style.Text>
            <style.TextInput>
              {volunteerData ? volunteerData.title : '없음'}
            </style.TextInput>
            <style.Text>활동분야</style.Text>
            <style.TextInput>
              {volunteerData ? volunteerData.summary : '없음'}
            </style.TextInput>
          </style.TextContainer>
        </style.Title>

        <style.Detail>
          <style.TextContainer>
            <style.Text>모집기간</style.Text>
            <style.TextInput>
              {volunteerData ? volunteerData.recruitDate : '없음'}
            </style.TextInput>
          </style.TextContainer>

          <style.TextContainer>
            <style.Text>동아리 소개</style.Text>
            <style.MainTextInput>
              {volunteerData ? volunteerData.content : '없음'}
            </style.MainTextInput>
          </style.TextContainer>
        </style.Detail>
      </style.Container>
    </style.Div>
  )
}
