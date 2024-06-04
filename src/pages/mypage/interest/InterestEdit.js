import React, { useState } from 'react'
import Header from '../../../components/header/Header'
import InterestCard from '../../../components/card/InterestCard'
import axios from 'axios'
import { DOMAIN_NAME } from '../../../App'
import { useNavigate } from 'react-router-dom'

export default function InterestEdit() {
  const navigate = useNavigate()
  const [clickedItems, setClickedItems] = useState(Array(16).fill(false))

  const handleItemClick = (index) => {
    const newClickedItems = [...clickedItems]
    newClickedItems[index] = !newClickedItems[index]
    setClickedItems(newClickedItems)
  }

  const handleSubmit = async () => {
    try {
      // const token = await axios
      //   .get(`${DOMAIN_NAME}/test-user`)
      //   .then((res) => res.data.body)

      const interestKeyword = clickedItems.map((item) => (item ? 1 : 0))

      await axios.put(
        `${process.env.REACT_APP_BASE_URL}user/keyword`,
        { interestKeyword }, // interestKeyword만 포함하도록 수정
        {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        }
      )

      // 페이지 이동 시에 URL 매개변수를 사용하여 데이터 전달
      navigate(`/interest-info?interestKeyword=${interestKeyword.join(',')}`)
    } catch (error) {
      console.error('사용자 관심 키워드 업데이트 중 오류 발생:', error)
    }
  }

  return (
    <>
      <Header title='매칭 정보 변경' />
      <InterestCard
        clickedItems={clickedItems}
        handleItemClick={handleItemClick}
        isClickable={true}
        buttonName={'변경 완료'}
        onSubmit={handleSubmit}
      />
    </>
  )
}
