import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffad0;
  height: 100vh;
  width: 100%;
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
  width: 410px;
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
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  transform: translate(-50%, -50%);
  //overflow: visible;
`

export const CanvasComponent = styled.canvas``

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  max-height: 180px;
  max-width: 330px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  p:first-child {
    font-weight: 800;
    font-size: 16px;
    color: black;
  }
  font-size: 14px;
  color: #a6a6a6;
`

export const ConfirmButton = styled.button`
  background-color: #fd814a;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 40px;
  margin-top: 10px;
  width: 100px;
`
