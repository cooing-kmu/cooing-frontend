import React from 'react'
import Recommend from './Recommend'
import './ChattingList.css'
import { MainContainer } from '../../components/information/BgComponent'
import ChattingList from './ChattingList'
export default function Chatting() {
  return (
    <MainContainer>
      <Recommend />

      <ChattingList />
    </MainContainer>
  )
}
