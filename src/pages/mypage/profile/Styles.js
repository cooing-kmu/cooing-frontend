import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  width: 100%;
`

export const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background: linear-gradient(180deg, #fd814a 0%, #fc5c4c 100%);
`

export const CircleContainer = styled.div`
  position: absolute;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-top: 180px;
  background-color: #fff;
`

export const ImageContainer = styled.div`
  position: relative;
  align-items: center;
  width: 130px;
  height: 130px;
  top: 185px;
  overflow: hidden;
  border-radius: 50%; // 둥근 프로필 이미지로 만들기 위해 추가
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CameraContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 270px;
  right: 170px;
`

export const NickNameContainer = styled.div`
  font-size: 15px;
  width: 250px;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start; /* 텍스트를 왼쪽으로 정렬 */
`
export const MessageContainer = styled.div`
  font-size: 15px;
  width: 250px;
  margin: 30px auto 138px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start; /* 텍스트를 왼쪽으로 정렬 */
`

export const NicknameInput = styled.input`
  border: 1px solid #fd814a;
  width: 250px;
  height: 40px;
  border-radius: 12px;
  text-indent: 10px;
`
export const MessageInput = styled.input`
  border: 1px solid #fd814a;
  width: 250px;
  height: 70px;
  border-radius: 12px;
  text-indent: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  color: white;
  background-color: #fc5c4c;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`
