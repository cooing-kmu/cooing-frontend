import React from 'react'
import Recommend from './Recommend'
import './Chatting.css'
import { MainContainer } from '../../components/chatting/BgComponent'
import ChattingList from './ChattingList'
import { useRecoilState } from 'recoil'
import { userState } from '../../Atom'
import { useNavigate } from 'react-router-dom'

export default function Chatting() {
  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()
  console.log(user)
  if (!user) {
    navigate('/')
  }
  return (
    <MainContainer>
      <Recommend />
      <ChattingList />
    </MainContainer>
  )
}
