import * as style from './Styles'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { MenuContainer } from './Styles'
import { ReactComponent as Ic_Plus } from '../../assets/icons/icon-plus.svg'

export default function CheckList() {
  const [isActive, setIsActive] = useState(false)
  const [clickedItems, setClickedItems] = useState(Array(8).fill(false)) // 아이템의 개수에 맞게 초기 상태 설정

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const handleItemClick = (index) => {
    // 클릭된 아이템의 상태를 변경하기 위해 클릭된 아이템의 인덱스를 전달받음
    const newClickedItems = [...clickedItems] // 기존 배열 복사
    newClickedItems[index] = !newClickedItems[index] // 클릭된 아이템의 상태를 반전
    setClickedItems(newClickedItems) // 새로운 클릭된 아이템 배열로 상태 업데이트
  }

  return (
    <style.MainContainer>
      <Header title='자립 체크리스트' />
      <style.MenuContainer>
        <style.ItemContainer
          onClick={() => handleItemClick(0)}
          clicked={clickedItems[0]}
        >
          1. 소득
          <Ic_Plus fill={clickedItems[0] ? '#fd814a' : 'black'} />
        </style.ItemContainer>

        <style.ItemContainer
          onClick={() => handleItemClick(1)}
          clicked={clickedItems[1]}
        >
          2. 주거
          <Ic_Plus fill={clickedItems[1] ? '#fd814a' : 'black'} />
        </style.ItemContainer>

        <style.ItemContainer
          onClick={() => handleItemClick(2)}
          clicked={clickedItems[2]}
        >
          3. 금융
          <Ic_Plus fill={clickedItems[2] ? '#fd814a' : 'black'} />
        </style.ItemContainer>

        <style.ItemContainer
          onClick={() => handleItemClick(3)}
          clicked={clickedItems[3]}
        >
          4. 진학
          <Ic_Plus fill={clickedItems[3] ? '#fd814a' : 'black'} />
        </style.ItemContainer>

        <style.ItemContainer
          onClick={() => handleItemClick(4)}
          clicked={clickedItems[4]}
        >
          5. 취업
          <Ic_Plus fill={clickedItems[4] ? '#fd814a' : 'black'} />
        </style.ItemContainer>

        <style.ItemContainer
          onClick={() => handleItemClick(5)}
          clicked={clickedItems[5]}
        >
          6. 의료 및 건강
          <Ic_Plus fill={clickedItems[5] ? '#fd814a' : 'black'} />
        </style.ItemContainer>

        <style.ItemContainer
          onClick={() => handleItemClick(6)}
          clicked={clickedItems[6]}
        >
          7. 기타
          <Ic_Plus fill={clickedItems[6] ? '#fd814a' : 'black'} />
        </style.ItemContainer>

        <style.ItemContainer
          onClick={() => handleItemClick(7)}
          clicked={clickedItems[7]}
        >
          8. 알아두면 꿀 팁
          <Ic_Plus fill={clickedItems[7] ? '#fd814a' : 'black'} />
        </style.ItemContainer>
      </style.MenuContainer>
    </style.MainContainer>
  )
}
