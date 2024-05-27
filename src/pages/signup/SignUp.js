import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import camera from '../../assets/icons/icon-camera.svg';
import faceImage from '../../assets/faceImage.svg';
import Header from '../../components/header/Header';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 170px;
  height: 170px;
  margin: 175px auto 0;
`;

const Label = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const NickNameContainer = styled.div`
  font-size: 15px;
  width: 250px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const NicknameInput = styled.input`
  border: 1px solid #FD814A;
  width: 250px;
  height: 40px;
  border-radius: 12px;
`;

const ProfileContainer = styled.div`
  font-size: 15px;
  width: 250px;
  margin: 30px auto 138px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const ProfileInput = styled.input`
  border: 1px solid #FD814A;
  width: 250px;
  height: 70px;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  color: white;
  background-color: #FC5C4C;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export default function SignUp() {
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate('/sign-up2');
    };
    const [profileImg, setProfileImg] = useState("");

    const setPreviewImg = (event) => {
        var reader = new FileReader();
        reader.onload = function (event) {
            setProfileImg(event.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    return (
        <Div>
            <Header title="프로필 등록" />

            <ImageContainer>

                {profileImg ? (
                    <img src={profileImg} style={{ Width: "150px", height:"150px" }} alt="회원가입 얼굴" />
                ) : (
                    <img src={faceImage} style={{ Width: "150px", height:"150px" }} alt="회원가입 얼굴" />
                )}

                <Label htmlFor="image">
                    <img src={camera} alt="카메라 버튼" />
                </Label>
                <input type="file" id="image" accept="image/*" onChange={setPreviewImg} style={{ display: "none" }} />

            </ImageContainer>
            <NickNameContainer>
                닉네임
                <NicknameInput />
            </NickNameContainer>

            <ProfileContainer>
                프로필 메세지
                <ProfileInput />
            </ProfileContainer>

            <ButtonContainer>
                <Button onClick={handleSignUpClick}>다음</Button>
            </ButtonContainer>
        </Div>
    );
}
