import styled from 'styled-components'
import connectImage from '../../../../assets/connectImage.svg'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.div`
  width: 388px;
  height: 750px;
  margin: 80px auto 0;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContentsContainer = styled.div`
  height: 138px;
  display: flex;
  align-items: center;
  border: #a6a6a6 solid 1px;
  border-radius: 10px;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 10px;
  cursor: pointer;
`

export const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 15px;
`

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`

export const Summary = styled.div`
  font-size: 12px;
`

export const Img = styled.img`
  font-size: 10px;
  color: #a6a6a6;
  width: 90px;
  height: 100px;
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
  margin-top: 15px;
`

export const detailData = [
    {
        Title: '새날',
        summary: '밴드 동아리',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '마젠타',
        summary: '밴드 동아리',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '슈팅',
        summary: '우리 같이 축구 합시다.',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '샤유팅',
        summary: '우리 같이 응원해요',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '볼링',
        summary: '굴려굴려',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '안녕',
        summary: '나는 찬우야',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '안녕',
        summary: '나는 찬우야',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '안녕',
        summary: '나는 찬우야',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '안녕',
        summary: '나는 찬우야',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '안녕',
        summary: '나는 찬우야',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '안녕',
        summary: '나는 찬우야',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
    {
        Title: '안녕',
        summary: '나는 찬우야',
        period: '04/04 ~ 04/23',
        img: connectImage,
    },
]
