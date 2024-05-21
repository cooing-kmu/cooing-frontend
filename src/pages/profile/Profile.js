import React, { useState } from 'react'
import * as style from './Styles'
import Header from '../../components/header/Header'
import { ReactComponent as Ic_User } from '../../assets/icons/icon-user.svg'
import { ReactComponent as Ic_Camera } from '../../assets/icons/icon-camera.svg'
import { useNavigate } from 'react-router-dom'
import { CircleContainer } from './Styles'

export default function Profile() {
  // const ImageUpload = () => {
  //   const [uploadImgUrl, setUploadImgUrl] = useState('')
  //
  //   const onchangeImageUpload = (e) => {
  //     const { files } = e.target
  //     const uploadFile = files[0]
  //     const reader = new FileReader()
  //     reader.readAsDataURL(uploadFile)
  //     reader.onloadend = () => {
  //       setUploadImgUrl(reader.result)
  //     }
  //   }

  const navigate = useNavigate()

  return (
    <style.MainContainer>
      <style.BackgroundContainer>
        <Header title='프로필 변경' />
        <style.CircleContainer></style.CircleContainer>
        <style.ImageContainer>
          <Ic_User />
          <style.CameraContainer>
            <Ic_Camera alt='카메라 버튼' />
          </style.CameraContainer>
        </style.ImageContainer>
      </style.BackgroundContainer>

      <style.NickNameContainer>
        닉네임
        <style.NicknameInput />
      </style.NickNameContainer>

      <style.MessageContainer>
        프로필 메세지
        <style.MessageInput />
      </style.MessageContainer>

      <style.ButtonContainer>
        <style.Button onClick={() => navigate(-1)}>변경 완료</style.Button>
      </style.ButtonContainer>
    </style.MainContainer>
  )
}
