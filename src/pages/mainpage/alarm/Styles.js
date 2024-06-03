import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainContainer = styled.div`
  width: 370px;
  height: 750px;
  margin: 80px auto 0;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContentsContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: #a6a6a6 solid 1px;
  cursor: pointer;
`

export const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  gap: 10px;
`

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`

export const Summary = styled.div`
  font-size: 12px;
=`

export const Time = styled.div`
  display: flex;
  font-size: 10px;
  color: #a6a6a6;
`
