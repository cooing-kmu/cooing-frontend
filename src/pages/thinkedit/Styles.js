import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100vh;
`

// export const MainContainer = styled.div`
//   gap: 16px;
//   margin-top: 27px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow: auto;
//   height: calc(100vh - 224px);
//   //&::-webkit-scrollbar {
//   //  display: none;
//   //}
// `

export const CardContainer = styled.div`
  gap: 16px;
  margin-top: 100px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  //height: calc(100vh - 224px);
  &::-webkit-scrollbar {
    display: none;
  }
`

export const SubContainer = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 200;
`

export const ItemContainer = styled.div`
  width: 160px;
  height: 134px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${(props) =>
    props.clicked ? '2px solid #FC5C4C;' : '2px solid #C4C4C4'};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

export const TextContainer = styled.div`
  margin-right: 200px;
`
