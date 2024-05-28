import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import axios from 'axios'
import * as style from './Styles'

export default function Alarm() {
  const navigate = useNavigate()
  const [boardData, setBoardData] = useState([])

  return (
    <style.Div>
      <Header title='알림' />

      <style.MainContainer>
        {/*{boardData.length > 0 &&*/}
        {/*  boardData.map((item, index) => (*/}
        {/*    <div*/}
        {/*      key={'리워드 지급'}*/}
        {/*      // onClick={() => handleBoardClick(item.boardId)}*/}
        {/*    >*/}
        {/*      <style.ContentsContainer key={'리워드 아이디'}>*/}
        {/*        <style.TitleSummary>*/}
        {/*          <style.Title>테스트</style.Title>*/}
        {/*          <style.Summary>테스트</style.Summary>*/}
        {/*        </style.TitleSummary>*/}
        {/*        <style.Time>테스트</style.Time>*/}
        {/*      </style.ContentsContainer>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        <div
          key={'리워드 지급'}
          // onClick={() => handleBoardClick(item.boardId)}
        >
          <style.ContentsContainer key={'리워드 아이디'}>
            <style.TitleSummary>
              <style.Title>리워드 이름</style.Title>
              <style.Summary>리워드 내용</style.Summary>
            </style.TitleSummary>
            <style.Time>리워드 지급 시간</style.Time>
          </style.ContentsContainer>
        </div>
      </style.MainContainer>
    </style.Div>
  )
}
