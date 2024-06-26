import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import hanselHand from '../../assets/images/image-hanselHand.svg'
import gretelHand from '../../assets/images/image-gretelHand.svg'
import { useSetRecoilState } from 'recoil'
import { roleState } from '../../Atom'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 140px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 80px;
  gap: 50px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  color: white;
  background-color: #fc5c4c;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`

const ClickHansel = styled.div`
  box-shadow: ${(props) => (props.clicked ? '0px 0px 10px black;' : 'none')};
  background-color: #ffb3ac;
  width: 330px;
  height: 140px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: end;
`

const ClickGretel = styled.div`
  box-shadow: ${(props) => (props.clicked ? '0px 0px 10px black;' : 'none')};
  background-color: #ffd3aa;
  width: 330px;
  height: 140px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: start;
`

const HanselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 15px;
`

const GretelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 15px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
`

const Content = styled.div`
  font-size: 14px;
`

export default function SignUp2() {
  const navigate = useNavigate()
  const [hanselClicked, setHanselClicked] = useState(false)
  const [gretelClicked, setGretelClicked] = useState(false)
  const setRole = useSetRecoilState(roleState)

  const HanselClick = () => {
    setHanselClicked(true)
    setGretelClicked(false)
    setRole('헨젤')
  }

  const GretelClick = () => {
    setGretelClicked(true)
    setHanselClicked(false)
    setRole('그레텔')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up3')
  }

  return (
    <Div>
      <Header title='프로필 등록' />

      <Paragraph>아래 해당되는 곳을 눌러주세요.</Paragraph>

      <MainContainer>
        <ClickHansel onClick={HanselClick} clicked={hanselClicked}>
          <img src={hanselHand} alt={'헨젤손'} />
          <HanselContainer>
            <Title>저는 헨젤이에요!</Title>
            <Content>자립에 대한 도움을 얻고 싶어요.</Content>
          </HanselContainer>
        </ClickHansel>

        <ClickGretel onClick={GretelClick} clicked={gretelClicked}>
          <GretelContainer>
            <Title>저는 그레텔이에요!</Title>
            <Content>고민있는 친구들을 도와주고 싶어요.</Content>
          </GretelContainer>
          <img src={gretelHand} alt={'그레텔 손'} />
        </ClickGretel>
      </MainContainer>

      <ButtonContainer>
        <Button onClick={handleSignUpClick}>다음</Button>
      </ButtonContainer>
    </Div>
  )
}
