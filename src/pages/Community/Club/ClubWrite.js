import React from 'react'
import * as style from './Style/ClubWriteStyle'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import defaultImage from '../../../assets/defaultImage.svg'

export default function ClubWrite() {
  const navigate = useNavigate()
  const handleClubClick = () => {
    navigate('/club')
  }

  return (
    <style.Div>
      <Header title='글쓰기' />

      <style.Container>
        <style.Title>
          <style.TextContainer>
            <style.TextInput placeholder='동아리 이름' />
            <style.TextInput placeholder='분야 ex)밴드,춤,노래' />
          </style.TextContainer>
          <style.Image src={defaultImage}/>
        </style.Title>

        <style.Detail>
          <style.TextContainer>
            <style.Text>모집기간</style.Text>
            <style.TextInput placeholder='ex) 04/04 ~ 04/23' />
          </style.TextContainer>

          <style.TextContainer>
            <style.Text>동아리 소개</style.Text>
            <style.MainTextInput placeholder='동아리 소개글을 작성해주세요.' />
          </style.TextContainer>
        </style.Detail>
      </style.Container>

      <style.ButtonContainer>
        <style.Button onClick={handleClubClick}>작성완료</style.Button>
      </style.ButtonContainer>
    </style.Div>
  )
}
