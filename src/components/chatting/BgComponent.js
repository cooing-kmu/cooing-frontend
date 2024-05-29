import styled from 'styled-components'
import theme from '../../Theme'
export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, ${theme.red}, ${theme.orange});
  border-radius: 0 0 40px 40px;
  width: 100%;
  height: 240px;
  color: white;
`

export const ChattingContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 17px;
  height: '20%';
`
export const ChattingCountContainer = styled.div`
  background-color: ${theme.red};
  border-radius: 4px;
  height: 25px;
  width: 25px;
  color: white;
  font-weight: bolder;
  font-size: 15px;
  text-align: center;
`
