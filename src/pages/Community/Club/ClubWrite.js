import React,{useState} from 'react'
import * as style from './Style/ClubWriteStyle'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import defaultImage from '../../../assets/defaultImage.svg'
import camera from '../../../assets/camera.svg'
import {ImageContainer} from "./Style/ClubWriteStyle";

export default function ClubWrite() {
  const navigate = useNavigate()
  const handleClubClick = () => {
    navigate('/club')
  }
  const [profileImg, setProfileImg] = useState("");

  const setPreviewImg = (event) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      setProfileImg(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <style.Div>
      <Header title='글쓰기' />

      <style.Container>
        <style.Title>
          <style.TextContainer>
            <style.TextInput placeholder='동아리 이름' />
            <style.TextInput placeholder='분야 ex)밴드,춤,노래' />
          </style.TextContainer>
          <style.ImageContainer>
            {profileImg ? (
                <img src={profileImg} style={{ maxWidth: "90px", maxheight:"100px" }} alt="동아리 사진" />
            ) : (
                <img src={defaultImage} style={{ maxWidth: "90px", maxheight:"100px" }} alt="동아리 사진" />
            )}
          </style.ImageContainer>

          <style.Label htmlFor="image">
            <img src={camera} alt="카메라 버튼" />
          </style.Label>
          <input type="file" id="image" accept="image/*" onChange={setPreviewImg} style={{ display: "none" }} />
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
