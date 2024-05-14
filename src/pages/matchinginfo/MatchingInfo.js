import * as style from './Styles'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export default function MatchingInfo() {
  const navigate = useNavigate()

  const UserInterestKeyword = [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0]

  return (
    <style.MainContainer>
      <Header title='매칭 정보' />

      <style.CardContainer>
        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[0]}>
            <h1>🍳</h1>요리
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[1]}>
            <h1>🏃🏻</h1>스포츠
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[2]}>
            <h1>📖</h1>독서
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[3]}>
            <h1>🧘🏻</h1>건강
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[4]}>
            <h1>🧑🏻‍💻</h1>게임
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[5]}>
            <h1>🛍️</h1>쇼핑
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[6]}>
            <h1>💗</h1>연애
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[7]}>
            <h1>🎵</h1>음악
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[8]}>
            <h1>🎨</h1>미술
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[9]}>
            <h1>🎇</h1>공연
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[10]}>
            <h1>💄</h1>뷰티
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[11]}>
            <h1>🤝🏻</h1>봉사
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[12]}>
            <h1>🎞️</h1>영화
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[13]}>
            <h1>📘</h1>만화
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[14]}>
            <h1>🖼️</h1>전시
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserInterestKeyword[15]}>
            <h1>🐶</h1>동물
          </style.ItemContainer>
        </style.SubContainer>
        <style.ButtonContainer>
          <style.Button>수정</style.Button>
        </style.ButtonContainer>
      </style.CardContainer>
    </style.MainContainer>
  )
}
