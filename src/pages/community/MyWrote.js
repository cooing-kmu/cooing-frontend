import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { DOMAIN_NAME } from '../../App'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
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

export default function MyWrote() {
  const navigate = useNavigate()
  const [myWroteData, setMyWroteData] = useState([])

  useEffect(() => {
    async function fetchMyWroteData() {
      try {
        const response = await axios.get(
          `${DOMAIN_NAME}/boards?boardType=POST`,
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
        )
        setMyWroteData(response.data.body)
      } catch (error) {
        console.error('스크랩 데이터를 불러오는 중 오류 발생:', error)
      }
    }

    fetchMyWroteData()
  }, [])

  const handleBoardClick = (boardId) => {
    navigate(`/free-board-post/${boardId}`)
  }

  return (
    <Div>
      <Header title='내가 쓴 글' />

      <MainContainer>
        {myWroteData.map((item, index) => (
          <ContentsContainer
            key={index}
            onClick={() => handleBoardClick(item.boardId)}
          >
            <TitleSummary>
              <Title>{item.title}</Title>
              <Summary>{item.contentSummary}</Summary>
            </TitleSummary>
            <Time>{item.createDatetime}</Time>
          </ContentsContainer>
        ))}
      </MainContainer>
    </Div>
  )
}
