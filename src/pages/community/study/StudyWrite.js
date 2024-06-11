import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './style/StudyWriteStyle'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function StudyWrite() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [numberOfMembers, setNumberOfMembers] = useState(0)
  const [content, setContent] = useState('')

  const handleStudyClick = () => {
    // 백엔드로 데이터 전송
    const studyData = {
      title: title,
      category: category,
      location: '',
      numberOfMembers: numberOfMembers,
      content: content,
    }

    axios
      .post(`${DOMAIN_NAME}/study`, studyData, {
        headers: {
          Authorization: window.localStorage.getItem('Authorization'),
        },
      })
      .then((response) => {
        alert('스터디 성공적으로 생성되었습니다!')
        navigate('/study')
      })
      .catch((error) => {
        console.error('There was an error creating the study1!', error)
        alert('스터디 생성에 실패했습니다. 다시 시도해주세요.')
      })
  }

  return (
    <style.Div>
      <Header title='글쓰기' />

      <style.Container>
        <style.Title>
          <style.TextContainer>
            <style.TextInput
              placeholder='스터디 이름'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <style.TextInput
              placeholder='분야 ex) 코딩, 수학, 국어'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </style.TextContainer>
        </style.Title>

        <style.Detail>
          <style.TextContainer>
            <style.Text>인원</style.Text>
            <style.TextInput
              placeholder='제한인원을 작성해주세요'
              value={numberOfMembers}
              onChange={(e) => setNumberOfMembers(e.target.value)}
            />
          </style.TextContainer>

          <style.TextContainer>
            <style.Text>동아리 소개</style.Text>
            <style.MainTextInput
              placeholder='동아리 소개글을 작성해주세요.'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </style.TextContainer>
        </style.Detail>
      </style.Container>

      <style.ButtonContainer>
        <style.Button onClick={handleStudyClick}>작성완료</style.Button>
      </style.ButtonContainer>
    </style.Div>
  )
}
