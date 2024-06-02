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
  gap: 18px;
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

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 90px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  span:first-child {
    color: black;
    font-size: 22px;
    font-weight: bold;
  }
  span:last-child {
    color: #fd814a;
    font-size: 14px;
    font-weight: bold;
  }
`

export const TextContainer = styled.div`
  font-weight: bold;
`

export const BioContainer = styled.div`
  margin-bottom: 30px;
`
