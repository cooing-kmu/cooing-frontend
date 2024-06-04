import * as style from './Styles'
import Header from '../../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import ThinkCard from '../../../components/card/ThinkCard'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'

export default function SetThinkKeyword() {
  const navigate = useNavigate()
  const [clickedItems, setClickedItems] = useState(Array(8).fill(false)) // 아이템의 개수에 맞게 초기 상태 설정

  const handleItemClick = (index) => {
    // 클릭된 아이템의 상태를 변경하기 위해 클릭된 아이템의 인덱스를 전달받음
    const newClickedItems = [...clickedItems] // 기존 배열 복사
    newClickedItems[index] = !newClickedItems[index] // 클릭된 아이템의 상태를 반전
    setClickedItems(newClickedItems) // 새로운 클릭된 아이템 배열로 상태 업데이트
  }

  const handleSubmit = async () => {
    try {
      // const token = await axios
      //   .get(`${DOMAIN_NAME}/test-user`)
      //   .then((res) => res.data.body)

      const concernKeyword = clickedItems.map((item) => (item ? 1 : 0))

      await axios.put(
        `${process.env.REACT_APP_BASE_URL}user/keyword`,
        { concernKeyword }, // concernKeyword만 포함하도록 수정
        {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        }
      )

      // 페이지 이동 시에 URL 매개변수를 사용하여 데이터 전달
      navigate(`/think-info?concernKeyword=${concernKeyword.join(',')}`)
    } catch (error) {
      console.error('사용자 관심 키워드 업데이트 중 오류 발생:', error)
    }
  }

  return (
    <style.MainContainer>
      <Header title='매칭 정보 등록' />

      <ThinkCard
        clickedItems={clickedItems}
        handleItemClick={handleItemClick}
        isClickable={true}
        buttonName={'등록 완료'}
        onSubmit={handleSubmit} // handleSubmit 함수 전달
      />
    </style.MainContainer>
  )
}
