import React, { useState, useEffect } from 'react'
import Header from '../../../components/header/Header'
import InterestCard2 from '../../../components/card/InterestCard2'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'
import * as style from './Styles'
import { useLocation } from 'react-router-dom'

export default function InterestInfo() {
  const location = useLocation()
  const [user, setUser] = useState(null)
  const [interestKeyword, setInterestKeyword] = useState([])

  // useEffect 밖에서 getUserInfo 함수 정의 및 호출
  const getUserInfo = async () => {
    try {
      const userInfo = await axios
        .get(`${process.env.REACT_APP_BASE_URL}user`, {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        })
        .then((res) => {
          const _user = res.data.body
          setUser(_user)
          setInterestKeyword(_user.userInterestKeyword)
          return _user
        })
      return userInfo
    } catch (error) {
      console.error('Error fetching user information:', error)
    }
  }

  useEffect(() => {
    // URL 매개변수에서 데이터를 가져와서 설정
    const searchParams = new URLSearchParams(location.search)
    const interestKeywordParam = searchParams.get('interestKeyword')
    if (interestKeywordParam) {
      setInterestKeyword(interestKeywordParam.split(','))
    } else {
      getUserInfo() // getUserInfo 함수 호출
    }
  }, [location])

  return (
    <style.MainContainer>
      <Header title='매칭 정보 - 관심' />
      {user && (
        <InterestCard2
          layout={0}
          interestList={interestKeyword}
          buttonName={'수정'}
        />
      )}
    </style.MainContainer>
  )
}
