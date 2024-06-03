import React from 'react'
import Recommend from './Recommend'
import './Chatting.css'
import { MainContainer } from '../../components/chatting/BgComponent'
import ChattingList from './ChattingList'
import TestLogin from './test/testLogin'
import { useRecoilState } from 'recoil'
import { userState } from '../../utils/userAtom'

export default function Chatting() {
  const [user, setUser] = useRecoilState(userState)

  console.log(user)
  return (
    <MainContainer>
      <div>
        {!user ? (
          <TestLogin />
        ) : (
          <div>
            <Recommend />
            <ChattingList />
          </div>
        )}
      </div>
    </MainContainer>
  )
}
