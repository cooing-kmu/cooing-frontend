import * as style from './Styles'
import Header from '../../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import ThinkCard from '../../../components/card/ThinkCard'

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

      <ThinkCard
        clickedItems={clickedItems}
        handleItemClick={handleItemClick}
        isClickable={true}
        buttonName={'변경 완료'}
      />
    </style.MainContainer>
  )
}
