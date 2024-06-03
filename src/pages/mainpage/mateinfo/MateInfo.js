import * as style from './Styles'
import Header from '../../../components/header/Header'
import { ReactComponent as Ic_User } from '../../../assets/icons/icon-user.svg'
import InterestCard2 from '../../../components/card/InterestCard2'
import ThinkCard2 from '../../../components/card/ThinkCard2'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function MateInfo() {
  const [user, setUser] = useState(null)
  const [nickname, setNickname] = useState('')
  const [role, setRole] = useState('')
  const [profileMessage, setProfileMessage] = useState('')
  const [profileImageUrl, setProfileImageUrl] = useState(null)
  const [interestKeywords, setInterestKeywords] = useState([])
  const [concernKeywords, setConcernKeywords] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await axios.get(`${DOMAIN_NAME}/test-user`)
        const token = tokenResponse.data.body

        const userResponse = await axios.get(`${DOMAIN_NAME}/user/mate`, {
          headers: {
            Authorization: token,
          },
        })

        const _user = userResponse.data.body
        setUser({ ..._user, token })
        setNickname(_user.name)
        setRole(_user.role)
        setProfileMessage(_user.profileMessage)
        setProfileImageUrl(_user.profileImageUrl)
        setInterestKeywords(_user.interestKeyword)
        setConcernKeywords(_user.concernKeyword)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <style.MainContainer>
      <style.BackgroundContainer>
        <Header title='MATE 정보' />
        <style.CircleContainer></style.CircleContainer>
        <style.ImageContainer>
          {profileImageUrl ? (
            <style.ProfileImage src={profileImageUrl} alt='Profile' />
          ) : (
            <Ic_User />
          )}
        </style.ImageContainer>
      </style.BackgroundContainer>
      <style.InfoContainer>
        <span>{nickname}</span>
        <span>{role}</span>
      </style.InfoContainer>
      <style.BioContainer>{profileMessage}</style.BioContainer>
      <style.TextContainer>관심 키워드</style.TextContainer>
      <InterestCard2
        layout={1}
        interestList={interestKeywords}
        buttonName={null}
      />
      <style.TextContainer>고민 키워드</style.TextContainer>
      <ThinkCard2 layout={1} interestList={concernKeywords} buttonName={null} />
      <span
        style={{ marginBottom: '20px', color: '#a6a6a6', fontSize: '14px' }}
      >
        MATE 관리는 [마이페이지 - 매칭 기능 활성화] 이용
      </span>
    </style.MainContainer>
  )
}
