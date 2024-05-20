import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import camera from '../../assets/camera.svg';
import faceImage from '../../assets/faceImage.svg';

const ImageContainer = styled.div`
  position: relative; /* ImageContainer를 상대 위치로 설정 */
  justify-content: center;
  align-items: center;
  display: flex;
  width: 170px;
  height: 170px;
  margin: 175px auto 0; /* 수평 가운데 정렬 */
`;

const Camera = styled.img`
  position: absolute; /* Camera를 절대 위치로 설정 */
  bottom: 0; /* ImageContainer 상단부터의 거리 */
  right: 0; /* ImageContainer 왼쪽부터의 거리 */
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
  gap:4px;
  align-items: flex-start; /* 텍스트를 왼쪽으로 정렬 */
`;
const ProfileContainer = styled.div`
  font-size: 15px;
  width: 250px;
  margin: 30px auto 138px; 
  display: flex;
  flex-direction: column;
  gap:4px;
  align-items: flex-start; /* 텍스트를 왼쪽으로 정렬 */
`;

const NicknameInput = styled.input`
  border: 1px solid #FD814A; 
  width: 250px;
  height: 40px;
  border-radius: 12px;
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
  color:white;
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
    return (
        <div>
            <ImageContainer>
                <img src={faceImage} alt="회원가입 얼굴" />
                <Camera src={camera} alt="카메라 버튼" />
            </ImageContainer>

            <NickNameContainer>
                닉네임
                <NicknameInput/>
            </NickNameContainer>

            <ProfileContainer>
                프로필 메세지
                <ProfileInput/>
            </ProfileContainer>

            <ButtonContainer>
                <Button onClick={handleSignUpClick} >다음</Button>
            </ButtonContainer>
        </div>
    );
}
