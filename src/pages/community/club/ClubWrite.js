import React, { useState } from 'react'
import * as style from './style/ClubWriteStyle'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import defaultImage from '../../../assets/images/image-default.svg'
import camera from '../../../assets/icons/icon-camera.svg'

import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function ClubWrite() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [recruitDate, setRecruitDate] = useState('')
  const [content, setContent] = useState('')
  const [profileImg, setProfileImg] = useState('')
  const [file, setFile] = useState(null) // 파일 상태 추가
  const [previewUrl, setPreviewUrl] = useState('') // 미리보기 URL 상태 추가

  const handleClubClick = async () => {
    try {
      const request = {
        title: title,
        summary: summary,
        recruitDate: recruitDate,
        content: content,
      }
      const formData = new FormData()
      const jsonData = JSON.stringify(request)
      const imgData = new Blob([jsonData], { type: 'application/json' })
      formData.append('request', imgData)
      formData.append('image', file)

      // 클럽 정보와 이미지를 백엔드로 전송
      await axios.post(`${DOMAIN_NAME}/club`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: window.localStorage.getItem('Authorization'),
        },
      })

      alert('동아리가 성공적으로 생성되었습니다!')
      navigate('/club')
    } catch (error) {
      console.error('동아리 생성 중 오류 발생!', error)
      alert('동아리 생성에 실패했습니다. 다시 시도해주세요.')
    }
  }

  const setPreviewImg = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFile(file) // 파일 상태 업데이트
      const previewUrl = URL.createObjectURL(file)
      setProfileImg(previewUrl)
      setPreviewUrl(previewUrl) // 미리보기 URL 상태 업데이트
    }
  }

  return (
    <style.Div>
      <Header title='글쓰기' />

      <style.Container>
        <style.Title>
          <style.TextContainer>
            <style.TextInput
              placeholder='동아리 이름'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <style.TextInput
              placeholder='분야 ex)밴드,춤,노래'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </style.TextContainer>
          <style.ImageContainer>
            {profileImg ? (
              <img
                src={profileImg}
                style={{ maxWidth: '90px', maxHeight: '100px' }}
                alt='동아리 사진'
              />
            ) : (
              <img
                src={defaultImage}
                style={{ maxWidth: '90px', maxHeight: '100px' }}
                alt='동아리 사진'
              />
            )}
          </style.ImageContainer>

          <style.Label htmlFor='image'>
            <img src={camera} alt='카메라 버튼' />
          </style.Label>
          <input
            type='file'
            id='image'
            accept='image/*'
            onChange={setPreviewImg}
            style={{ display: 'none' }}
          />
        </style.Title>

        <style.Detail>
          <style.TextContainer>
            <style.Text>모집기간</style.Text>
            <style.TextInput
              placeholder='ex) 04.04 ~ 04.23'
              value={recruitDate}
              onChange={(e) => setRecruitDate(e.target.value)}
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
        <style.Button onClick={handleClubClick}>작성완료</style.Button>
      </style.ButtonContainer>
    </style.Div>
  )
}
