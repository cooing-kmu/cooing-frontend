import * as style from './Styles'
import Header from '../../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import InterestCard2 from '../../../components/card/InterestCard2'

export default function InterestInfo() {
  const navigate = useNavigate()

  const UserInterestKeyword = [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0]

  return (
    <style.MainContainer>
      <Header title='매칭 정보 - 관심' />

      <InterestCard2
        layout={0}
        interestList={UserInterestKeyword}
        buttonName={'수정'}
      />
    </style.MainContainer>
  )
}
