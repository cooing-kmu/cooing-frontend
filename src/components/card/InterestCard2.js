import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MainContainer = styled.div`
  justify-content: center;
  gap: 16px;
  ${({ layout }) => (layout === 0 ? 'margin-top: 80px;' : 'margin-top: -50px;')}
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  ${({ layout }) =>
    layout === 0 ? 'margin-bottom: 20px;' : 'margin-bottom: 0px;'}
`

const SubContainer = styled.div`
  ${({ layout }) => (layout === 0 ? 'margin-top: 30px;' : 'margin-top: 0px;')}
  gap: 24px;
  display: grid;
  ${({ layout }) =>
    layout === 0
      ? 'grid-template-columns: repeat(2, 1fr);'
      : 'grid-template-columns: repeat(16, 1fr);'}
  font-weight: 200;
  overflow-x: auto; /* 가로 스크롤 추가 */
  max-width: 460px; /* 최대 너비 설정 */
  &::-webkit-scrollbar {
    display: none;
  }
`

const ItemContainer = styled.div`
  width: 160px;
  height: 150px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid ${(props) => (props.color === 1 ? '#FC5C4C' : '#C4C4C4')};
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
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  margin-top: 10px;
`

const InterestCard2 = ({ layout, interestList, buttonName }) => {
  const navigate = useNavigate()

  const items = [
    ['🍳', '요리'],
    ['🏃🏻', '스포츠'],
    ['📖', '독서'],
    ['🧘🏻', '건강'],
    ['🧑🏻‍💻', '게임'],
    ['🛍️', '쇼핑'],
    ['💗', '연애'],
    ['🎵', '음악'],
    ['🎨', '미술'],
    ['🎇', '공연'],
    ['💄', '뷰티'],
    ['🤝🏻', '봉사'],
    ['🎞️', '영화'],
    ['📘', '만화'],
    ['🖼️', '전시'],
    ['🐶', '동물'],
  ]

  return (
    <MainContainer layout={layout}>
      <SubContainer layout={layout}>
        {items.map((item, index) => (
          <ItemContainer key={index} color={interestList[index]}>
            <h1>{item[0]}</h1>
            {item[1]}
          </ItemContainer>
        ))}
      </SubContainer>
      <div>
        {buttonName === '수정' ? ( // 정보 수정
          <Button onClick={() => navigate('/interest-edit')}>
            {buttonName}
          </Button>
        ) : null}
      </div>
    </MainContainer>
  )
}

export default InterestCard2
