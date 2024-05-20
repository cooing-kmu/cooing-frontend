import styled from 'styled-components'


export const Div = styled.div`
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.input`
  height: 50px;
  width: 388px;
  border-radius: 10px;
  border: #a6a6a6 solid 1px;
  text-indent: 20px; /* placeholder를 오른쪽으로 20px 이동 */

  &::placeholder {
    font-size: 15px;
    color: #a6a6a6;
  }
`

export const Detail = styled.textarea`
  height: 582px;
  width: 388px;
  border-radius: 10px;
  border: #a6a6a6 solid 1px;
  resize: none;
  text-indent: 20px;
  padding-top: 20px;
  &::placeholder {
    font-size: 15px;
    color: #a6a6a6;
  }
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
