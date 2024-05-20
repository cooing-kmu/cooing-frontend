import React from 'react'
import whitePencil from '../../../assets/whitePencil.svg'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './Style/ClubStyle'

export default function Club() {
  const navigate = useNavigate()
  const handleWriteClick = () => {
    navigate('/club-write')
  }

  return (
      <style.Div>
        <Header title='동아리 및 소모임' />

        <style.MainContainer>
          {style.detailData.map((item, index) => (
            <style.ContentsContainer>
              <style.TitleSummary key={index}>
                <style.Title>{item.Title}</style.Title>
                <style.Summary>모집기간: {item.period}</style.Summary>
                <style.Summary>{item.summary}</style.Summary>
              </style.TitleSummary>
              <style.Img src={item.img} />
            </style.ContentsContainer>
          ))}
        </style.MainContainer>

        <style.ButtonContainer>
          <style.Button onClick={handleWriteClick}>
            <img src={whitePencil} />
            글쓰기
          </style.Button>
        </style.ButtonContainer>
    </style.Div>
  )
}
