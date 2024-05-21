import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffad0;
  height: 100vh;
`

export const CooingLogo = styled.div`
  width: 150px;
  height: 73px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 60px;
  align-items: center;
  margin-top: 30px;
`

export const ButtonContainer = styled.div`
  cursor: pointer;
`

export const Line = styled.div`
  width: 380px;
  height: 1px;
  background: #fd814a;
  display: flex;
`

export const CanvasContainer = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-position-x: center;
  background-position-y: 50px;
  background-size: 400px 400px;
  background-repeat: no-repeat;
`

export const SelectedObj = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  transform: translate(-50%, -50%);
  //overflow: visible;
`

export const CanvasComponent = styled.canvas``
