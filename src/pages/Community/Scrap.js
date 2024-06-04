import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'

const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const MainContainer = styled.div`
  width: 370px;
  height: 750px;
  margin: 80px auto 0;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ContentsContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: #a6a6a6 solid 1px;
  cursor: pointer;
`
const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`

const detailData = [
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

const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`

const Summary = styled.div`
  font-size: 12px;
`

const Time = styled.div`
  display: flex;
  font-size: 10px;
  color: #a6a6a6;
`

export default function Scrap() {

    return (
        <Div>
            <Header title='스크랩한 글' />

            <MainContainer>
                {detailData.map((item, index) => (
                    <ContentsContainer>
                        <TitleSummary key={index}>
                            <Title>{item.Title}</Title>
                            <Summary>{item.summary}</Summary>
                        </TitleSummary>
                        <Time>{item.time}</Time>
                    </ContentsContainer>
                ))}
            </MainContainer>
        </Div>
    )
}
