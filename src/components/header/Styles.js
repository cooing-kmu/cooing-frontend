import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin-top: 30px;
  &:first-child {
    float: left;
    position: absolute;
  }
  &:last-child {
    float: right;
    position: absolute;
  }
`

export const ButtonContainer = styled.div`
  cursor: pointer;
`
