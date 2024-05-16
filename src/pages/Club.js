import React from 'react'
import styled from 'styled-components'
import defaultImage from '../assets/defaultImage.svg'
import whitePencil from '../assets/whitePencil.svg'
import { useNavigate } from 'react-router-dom'

const MainContainer = styled.div`
  width: 388px;
  height: 750px;
  margin: 20px auto 0;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ContentsContainer = styled.div`
  height: 138px;
  display: flex;
  align-items: center;
  border: #a6a6a6 solid 1px;
  border-radius: 10px;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 10px;
  cursor: pointer;
`

const detailData = [
  {
    Title: '새날',
    summary: '밴드 동아리',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '마젠타',
    summary: '밴드 동아리',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '슈팅',
    summary: '우리 같이 축구 합시다.',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '샤유팅',
    summary: '우리 같이 응원해요',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '볼링',
    summary: '굴려굴려',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '안녕',
    summary: '나는 찬우야',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '안녕',
    summary: '나는 찬우야',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '안녕',
    summary: '나는 찬우야',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '안녕',
    summary: '나는 찬우야',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '안녕',
    summary: '나는 찬우야',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '안녕',
    summary: '나는 찬우야',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
  {
    Title: '안녕',
    summary: '나는 찬우야',
    period: '04/04 ~ 04/23',
    img: defaultImage,
  },
]

const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 15px;
`

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`

const Summary = styled.div`
  font-size: 12px;
`

const Img = styled.img`
  font-size: 10px;
  color: #a6a6a6;
  width: 90px;
  height: 100px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
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

export default function Club() {
  const navigate = useNavigate()
  const handleWriteClick = () => {
    navigate('/club-write')
  }

  return (
    <div>
      <MainContainer>
        {detailData.map((item, index) => (
          <ContentsContainer>
            <TitleSummary key={index}>
              <Title>{item.Title}</Title>
              <Summary>모집기간: {item.period}</Summary>
              <Summary>{item.summary}</Summary>
            </TitleSummary>
            <Img src={item.img} />
          </ContentsContainer>
        ))}
      </MainContainer>

      <ButtonContainer>
        <Button onClick={handleWriteClick}>
          <img src={whitePencil} />
          글쓰기
        </Button>
      </ButtonContainer>
    </div>
  )
}
