import Footer from '../../components/footer/Footer'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffad0;
  height: 100vh;
  gap: 360px;
`

export default function Community() {
  return (
    <MainContainer>
      커뮤니티 페이지 네비게이션 테스트
      <Footer />
    </MainContainer>
  )
}
