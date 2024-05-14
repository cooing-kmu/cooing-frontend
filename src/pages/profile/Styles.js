import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100vh;
`

export const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #fd814a 0%, #fc5c4c 100%);
`

export const ImageContainer = styled.div`
  position: relative;
  margin-top: 165px;
  width: 130px;
  height: 130px;
`

export const CameraContainer = styled.div`
  position: absolute; /* Camera를 절대 위치로 설정 */
  bottom: 5px; /* ImageContainer 상단부터의 거리 */
  right: 0; /* ImageContainer 왼쪽부터의 거리 */
  width: 50px;
  height: 50px;
  cursor: pointer;
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
`
export const MessageInput = styled.input`
  border: 1px solid #fd814a;
  width: 250px;
  height: 70px;
  border-radius: 12px;
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
