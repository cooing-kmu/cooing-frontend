import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import axios from 'axios'
import * as style from './Styles'
import { DOMAIN_NAME } from '../../../App'

export default function Alarm() {
  const [alarmData, setAlarmData] = useState([])

  const getNotifications = async () => {
    try {
      const notifications = await axios
        .get(`${DOMAIN_NAME}/notifications`, {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        })
        .then((res) => {
          const _user = res.data.body
          setAlarmData(_user.item)
          return _user
        })
      return notifications
    } catch (error) {
      console.error('Error fetching user information:', error)
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])

  return (
    <style.Div>
      <Header title={'알림'} />

      <style.MainContainer>
        {alarmData.length > 0 &&
          alarmData.map((alarmData, idx) => (
            <style.ContentsContainer key={idx}>
              <style.TitleSummary>
                <style.Title>{alarmData.title}</style.Title>
                <style.Summary>{alarmData.content}</style.Summary>
              </style.TitleSummary>
              <style.Time>{alarmData.createDatetime}</style.Time>
            </style.ContentsContainer>
          ))}
      </style.MainContainer>
    </style.Div>
  )
}
