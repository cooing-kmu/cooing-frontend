import React from 'react';
import styled from 'styled-components';
import whitePencil from '../assets/whitePencil.svg';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  width: 370px;
  height: 750px; 
  margin: 20px auto 0;
  overflow: auto;
  flex-direction: column;
  //&::-webkit-scrollbar {
  //  display: none;
  //}
`

const ContentsContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: #a6a6a6 solid 1px;
  cursor: pointer;
`

const detailData = [
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
    { Title: "안녕", summary: '나는 찬우야', time: "04/04 10:16"},
];

const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const Summary = styled.div`
  font-size: 12px;
`;

const Time = styled.div`
  display: flex;
  font-size: 10px;
  color: #A6A6A6;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  color:white;
  background-color: #FC5C4C;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;


export default function FreeBoard() {

    const navigate = useNavigate();
    const handleWriteClick = () => {
        navigate('/free-board-write');
    };

    return (
        <div>
            <MainContainer>
                    {detailData.map((item, index) => (
                        <ContentsContainer>
                            <TitleSummary key={index}>
                                <Title>{item.Title}</Title>
                                <Summary>{item.summary}</Summary>
                            </TitleSummary>
                            <Time>{item.time}</Time>
                        </ContentsContainer>
                    ))}
            </MainContainer>

            <ButtonContainer>
                <Button onClick={handleWriteClick}><img src={whitePencil}/>글쓰기</Button>
            </ButtonContainer>
        </div>
    );
}
