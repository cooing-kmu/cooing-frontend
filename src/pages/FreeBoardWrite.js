import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
  flex-direction: column;
  gap: 16px;
`

const Title = styled.input`
  height: 50px;
  width: 388px;
  border-radius: 10px;
  border: #a6a6a6 solid 1px;

  &::placeholder {
    font-size: 15px;
    text-indent: 20px; /* placeholder를 오른쪽으로 20px 이동 */
    color: #a6a6a6;
  }
`

const Detail = styled.textarea`
  height: 582px;
  width: 388px;
  border-radius: 10px;
  border: #a6a6a6 solid 1px;
  resize: none;
  &::placeholder {
    font-size: 15px;
    text-indent: 20px;
    padding-top: 20px;
    color: #a6a6a6;
  }
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

export default function FreeBoardWrite() {
  const navigate = useNavigate()
  const handleFreeBoardClick = () => {
    navigate('/free-board')
  }

  return (
    <div>
      <Container>
        <Title placeholder='제목' />
        <Detail placeholder='내용을 입력해주세요.' />
      </Container>

      <ButtonContainer>
        <Button onClick={handleFreeBoardClick}>작성완료</Button>
      </ButtonContainer>
    </div>
  )
}
