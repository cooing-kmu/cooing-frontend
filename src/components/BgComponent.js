import styled from 'styled-components'
import React from 'react'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fffad0;
  height: 100vh;
  width: 100%;
`

export const InfoContainer = styled.div`
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  height: 68%;
  width: calc(100% - 40px);
  margin: 97px 20px 0 20px;
  overflow-y: auto;
  padding: 15px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const LogoContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 30px;
`
export const DetailHeadContainer = styled.div`
  display: flex;
  font-weight: bold;
  margin-right: 9px;
  text-align: center;
  justify-content: center;
  width: 28%;
`
export const DetailBodyContainer = styled.div`
  width: 72%;
`

export const DetailContainer = ({ title, content }) => {
  return (
    <div style={{ display: 'flex', paddingBottom: '10px' }}>
      <DetailHeadContainer>{title}</DetailHeadContainer>
      <DetailBodyContainer>{content}</DetailBodyContainer>
    </div>
  )
}
