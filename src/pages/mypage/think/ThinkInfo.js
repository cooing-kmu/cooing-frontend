import * as style from './Styles'
import Header from '../../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ThinkCard2 from '../../../components/card/ThinkCard2'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function ThinkInfo() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [concernKeyword, setConcernKeyword] = useState([])

  useEffect(() => {
    async function getUserInfo() {
      try {
        const userInfo = await axios
          .get(`${DOMAIN_NAME}user`, {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
            // .then((res) => res.data.body),
          })
          .then((res) => {
            const _user = res.data.body
            setUser(_user)
            setConcernKeyword(_user.userConcernKeyword)
            return _user
          })
        return userInfo
      } catch (error) {
        console.error('Error fetching user information:', error)
      }
    }
    getUserInfo()
  }, [])

  return (
    <style.MainContainer>
      <Header title='매칭 정보 - 고민' />

      {user && (
        <ThinkCard2
          layout={0}
          interestList={concernKeyword}
          buttonName={'수정'}
        />
      )}
    </style.MainContainer>
  )
}
