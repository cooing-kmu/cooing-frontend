import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.div`
  height: 100px;
  width: 388px;
  display: flex;
  border: #a6a6a6 solid 1px;
  border-radius: 10px;
`

export const Detail = styled.div`
  height: 582px;
  width: 388px;
  border-radius: 10px;
  border: #a6a6a6 solid 1px;
  gap: 16px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
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
export const TextContainer = styled.div`
  border: none;
  margin: 17px;
  flex-direction: column;
  display: flex;
  gap: 15px;
`
export const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`
export const TextInput = styled.textarea`
  font-size: 12px;
  font-weight: normal;
  color: black;
  border: none;
  width: 200px;
  height: 30px;
  resize: none;
  &:focus {
    outline: none;
  }
`
export const MainTextInput = styled.textarea`
  font-size: 12px;
  font-weight: normal;
  color: black;
  border: none;
  width: 354px;
  height: 400px;
  resize: none;
  &:focus {
    outline: none;
  }
`
