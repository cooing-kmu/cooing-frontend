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

export const CircleContainer = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 100px;
  margin-top: 175px;
  background-color: #fff;
`

export const ImageContainer = styled.div`
  position: relative;
  margin-top: 180px;
  width: 130px;
  height: 130px;
`

export const TextContainer = styled.div`
  display: flex;
  margin-top: 90px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: flex-end;
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
