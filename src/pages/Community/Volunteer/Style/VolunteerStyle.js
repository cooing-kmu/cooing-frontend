import styled from 'styled-components'


export const Div = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.div`
  width: 370px;
  height: 750px;
  margin: 80px auto 0;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContentsContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: #a6a6a6 solid 1px;
  cursor: pointer;
`

export const detailData = [
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
]

export const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`

export const Summary = styled.div`
  font-size: 12px;
`

export const Time = styled.div`
  display: flex;
  font-size: 10px;
  color: #a6a6a6;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`
