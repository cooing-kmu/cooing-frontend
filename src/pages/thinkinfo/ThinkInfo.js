import * as style from './Styles'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export default function ThinkInfo() {
  const navigate = useNavigate()

  const UserThinkKeyword = [0, 1, 0, 0, 1, 0, 1, 1]

  return (
    <style.MainContainer>
      <Header title='매칭 정보 - 고민' />

      <style.CardContainer>
        <style.SubContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[0]}>
            <h1>💰</h1>소득
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[1]}>
            <h1>🏠</h1>주거
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[2]}>
            <h1>👕</h1>생활
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[3]}>
            <h1>💳</h1>금융
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[4]}>
            <h1>🧠</h1>심리정서
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[5]}>
            <h1>🏫</h1>진학
          </style.ItemContainer>
        </style.SubContainer>

        <style.SubContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[6]}>
            <h1>💼</h1>취업
          </style.ItemContainer>
          <style.ItemContainer Keyword={UserThinkKeyword[7]}>
            <h1>📚</h1>멘토링
          </style.ItemContainer>
        </style.SubContainer>
        <style.ButtonContainer>
          <style.Button onClick={() => navigate('/think-edit')}>
            수정
          </style.Button>
        </style.ButtonContainer>
      </style.CardContainer>
    </style.MainContainer>
  )
}
