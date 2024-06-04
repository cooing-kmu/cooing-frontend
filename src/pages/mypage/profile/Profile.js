import React, { useEffect, useState, useRef } from 'react'
import * as style from './Styles'
import Header from '../../../components/header/Header'
import { ReactComponent as Ic_User } from '../../../assets/icons/icon-user.svg'
import { ReactComponent as Ic_Camera } from '../../../assets/icons/icon-camera.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [profileMessage, setProfileMessage] = useState('')
  const [profileImageUrl, setProfileImageUrl] = useState(null)
  const fileInputRef = useRef(null)

  // 사용자 정보를 가져오는 함수
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
          setUser({ ..._user, token })
          setName(_user.username)
          setProfileMessage(_user.profileMessage)
          setProfileImageUrl(_user.profileImageUrl) // 백엔드에서 받은 이미지 설정
          return _user
        })
      return userInfo
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // 페이지가 로드될 때 사용자 정보를 가져옴
    getUserInfo()
  }, [])

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value
    setName(newNickname === '' ? name : newNickname)
  }

  const handleProfileMessageChange = (e) => {
    const newProfileMessage = e.target.value
    setProfileMessage(
      newProfileMessage === '' ? profileMessage : newProfileMessage
    )
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // 이미지를 로컬 URL로 변환하여 미리보기
      const localImageUrl = URL.createObjectURL(file)
      setProfileImageUrl(localImageUrl)
    }
  }

  const handleSubmit = async () => {
    if (user) {
      try {
        // 프로필 변경 데이터
        const formData = new FormData()
        formData.append(
          'request',
          JSON.stringify({
            name: name,
            profileMessage: profileMessage,
          })
        )

        const file = fileInputRef.current.files[0]
        if (file) {
          formData.append('profileImage', file)
        }

        await axios.put(
          `${process.env.REACT_APP_BASE_URL}user/profile`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
        )

        // 프로필 업데이트가 성공하면 사용자 정보 다시 가져오기
        await getUserInfo()

        navigate(-1, { replace: true }) // 마이페이지로 이동 (replace를 사용해 히스토리를 대체)
      } catch (error) {
        alert('1MB 이하의 이미지 파일만 업로드 가능합니다.')
      }
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <style.MainContainer>
      <style.BackgroundContainer>
        <Header title='프로필 변경' />
        <style.CircleContainer></style.CircleContainer>
        <style.ImageContainer>
          {profileImageUrl ? (
            <style.ProfileImage src={profileImageUrl} alt='Profile' />
          ) : (
            <Ic_User />
          )}
        </style.ImageContainer>
      </style.BackgroundContainer>
      <style.CameraContainer>
        <label htmlFor='fileInput'>
          <Ic_Camera alt='카메라 버튼' />
        </label>
        <input
          id='fileInput'
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
      </style.CameraContainer>

      <style.NickNameContainer>
        닉네임
        <style.NicknameInput
          value={name}
          onChange={handleNicknameChange}
          onFocus={(e) => {
            if (e.target.value === name) setName('')
          }}
          onBlur={(e) => {
            if (e.target.value === '') setName(name)
          }}
        />
      </style.NickNameContainer>

      <style.MessageContainer>
        프로필 메세지
        <style.MessageInput
          value={profileMessage}
          onChange={handleProfileMessageChange}
          onFocus={(e) => {
            if (e.target.value === profileMessage) setProfileMessage('')
          }}
          onBlur={(e) => {
            if (e.target.value === '') setProfileMessage(profileMessage)
          }}
        />
      </style.MessageContainer>

      <style.ButtonContainer>
        <style.Button onClick={handleSubmit}>변경 완료</style.Button>
      </style.ButtonContainer>
    </style.MainContainer>
  )
}
