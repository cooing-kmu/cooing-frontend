import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 65px;
  flex-direction: column;
  gap: 16px;
`

const Title = styled.div`
  height: 138px;
  width: 388px;
  display: flex;
  border: #a6a6a6 solid 1px;
  border-radius: 10px;
`

const Detail = styled.div`
  height: 582px;
  width: 388px;
  border-radius: 10px;
  border: #a6a6a6 solid 1px;
  gap: 16px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`
const TextContainer = styled.div`
  border: none;
  margin: 17px;
  flex-direction: column;
  display: flex;
  gap: 15px;
`
const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`
const TextInput = styled.textarea`
  font-size: 12px;
  font-weight: normal;
  color: black;
  resize: none;
  border: none;
`

export default function ClubWrite() {
  const navigate = useNavigate()
  const handleFreeBoardClick = () => {
    navigate('/free-board')
  }

  return (
    <div>
      <Container>
        <Title>
          <TextContainer>
            <TextInput placeholder='동아리 이름' />
            <TextInput placeholder='분야 ex)밴드,춤,노래' />
          </TextContainer>
        </Title>

        <Detail>
          <TextContainer>
            <Text>모집기간</Text>
            <TextInput placeholder='ex) 04/04 ~ 04/23' />
          </TextContainer>

          <TextContainer>
            <Text>동아리 소개</Text>
            <TextInput placeholder='동아리 소개글을 작성해주세요.' />
          </TextContainer>
        </Detail>
      </Container>

      <ButtonContainer>
        <Button onClick={handleFreeBoardClick}>작성완료</Button>
      </ButtonContainer>
    </div>
  )
}
