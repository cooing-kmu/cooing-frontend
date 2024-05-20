import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './Style/FreeBoardWriteStyle'

export default function FreeBoardWrite() {
  const navigate = useNavigate()
  const handleFreeBoardClick = () => {
    navigate('/free-board')
  }

  return (
    <style.Div>
      <Header title='글쓰기' />
      <style.Container>
        <style.Title placeholder='제목' />
        <style.Detail placeholder='내용을 입력해주세요.' />
      </style.Container>

      <style.ButtonContainer>
        <style.Button onClick={handleFreeBoardClick}>작성완료</style.Button>
      </style.ButtonContainer>
    </style.Div>
  )
}
