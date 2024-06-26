import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import axios from 'axios'
import * as style from './style/FreeBoardWriteStyle'
import { DOMAIN_NAME } from '../../../App'

export default function FreeBoardWrite() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const handleFreeBoardClick = async () => {
    try {
      await axios.post(
        `${DOMAIN_NAME}/board`,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        }
      )
      navigate('/free-board')
    } catch (error) {
      console.error('There was an error sending the data!', error)
    }
  }

  return (
    <style.Div>
      <Header title='글쓰기' />
      <style.Container>
        <style.Title
          placeholder='제목'
          value={title}
          onChange={handleTitleChange}
        />
        <style.Detail
          placeholder='내용을 입력해주세요.'
          value={content}
          onChange={handleContentChange}
        />
      </style.Container>

      <style.ButtonContainer>
        <style.Button onClick={handleFreeBoardClick}>작성완료</style.Button>
      </style.ButtonContainer>
    </style.Div>
  )
}
