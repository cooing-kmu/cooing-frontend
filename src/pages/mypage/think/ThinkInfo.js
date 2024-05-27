import * as style from './Styles'
import Header from '../../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import ThinkCard2 from '../../../components/card/ThinkCard2'

export default function ThinkInfo() {
  const navigate = useNavigate()

  const UserThinkKeyword = [0, 1, 0, 0, 1, 0, 1, 1]

  return (
    <style.MainContainer>
      <Header title='매칭 정보 - 고민' />

      <ThinkCard2
        layout={0}
        interestList={UserThinkKeyword}
        buttonName={'수정'}
      />
    </style.MainContainer>
  )
}
