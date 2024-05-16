import * as style from './Styles'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export default function ThinkEdit() {
  const navigate = useNavigate()
  const [clickedItems, setClickedItems] = useState(Array(8).fill(false)) // 아이템의 개수에 맞게 초기 상태 설정

  const handleItemClick = (index) => {
    // 클릭된 아이템의 상태를 변경하기 위해 클릭된 아이템의 인덱스를 전달받음
    const newClickedItems = [...clickedItems] // 기존 배열 복사
    newClickedItems[index] = !newClickedItems[index] // 클릭된 아이템의 상태를 반전
    setClickedItems(newClickedItems) // 새로운 클릭된 아이템 배열로 상태 업데이트
  }

  return (
    <style.MainContainer>
      <Header title='매칭 정보 변경' />

      <style.CardContainer>
        <style.TextContainer>
          <h3>도움 받을 분야를</h3>
          <p>3개 이상 선택해주세요.</p>
        </style.TextContainer>

        <style.SubContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(0)}
            clicked={clickedItems[0]}
          >
            <h1>💰</h1>소득
          </style.ItemContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(1)}
            clicked={clickedItems[1]}
          >
            <h1>🏠</h1>주거
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(2)}
            clicked={clickedItems[2]}
          >
            <h1>👕</h1>생활
          </style.ItemContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(3)}
            clicked={clickedItems[3]}
          >
            <h1>💳</h1>금융
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(4)}
            clicked={clickedItems[4]}
          >
            <h1>🧠</h1>심리정서
          </style.ItemContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(5)}
            clicked={clickedItems[5]}
          >
            <h1>🏫</h1>진학
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(6)}
            clicked={clickedItems[6]}
          >
            <h1>💼</h1>취업
          </style.ItemContainer>
          <style.ItemContainer
            onClick={() => handleItemClick(7)}
            clicked={clickedItems[7]}
          >
            <h1>📚</h1>멘토링
          </style.ItemContainer>
        </style.SubContainer>
        <style.ButtonContainer>
          <style.Button onClick={() => navigate('/think-info')}>
            완료
          </style.Button>
        </style.ButtonContainer>
      </style.CardContainer>
    </style.MainContainer>
  )
}
