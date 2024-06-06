import * as style from './Styles'
import Header from '../../components/header/Header'
import { ReactComponent as Ic_User } from '../../assets/icons/icon-user.svg'
import InterestCard2 from '../../components/card/InterestCard2'
import ThinkCard2 from '../../components/card/ThinkCard2'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DOMAIN_NAME } from '../../App'
import { useParams } from 'react-router-dom'

export default function UserInfo() {
  const { userId } = useParams()

  console.log(userId)

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios
          .get(`${DOMAIN_NAME}/user/${userId}`, {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          })
          .then((res) => res.data.body)

        console.log(user)
        setUser(user)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
    console.log(user)
  }, [userId])
  console.log(user)

  if (!user) {
    return <div>Loading...</div> // user가 null일 때 로딩 표시
  }
  return (
    <style.MainContainer>
      <style.BackgroundContainer>
        <Header title='프로필 정보' />
        <style.CircleContainer></style.CircleContainer>
        <style.ImageContainer>
          {user.profileImageUrl ? (
            <style.ProfileImage src={user.profileImageUrl} alt='Profile' />
          ) : (
            <Ic_User />
          )}
        </style.ImageContainer>
      </style.BackgroundContainer>
      <style.InfoContainer>
        <span>{user.username}</span>
        <span>{user.roleType}</span>
      </style.InfoContainer>
      <style.BioContainer>{user.profileMessage}</style.BioContainer>
      <style.TextContainer>관심 키워드</style.TextContainer>
      <InterestCard2
        layout={1}
        interestList={user.userInterestKeyword}
        buttonName={null}
      />
      <style.TextContainer>고민 키워드</style.TextContainer>
      <ThinkCard2
        layout={1}
        interestList={user.userConcernKeyword}
        buttonName={null}
      />
    </style.MainContainer>
  )
}
