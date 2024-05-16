import React from 'react';
import styled from 'styled-components';
import freeBoard from '../assets/freeBoard.svg';
import pencil from '../assets/pencil.svg';
import message from '../assets/message.svg';
import star from '../assets/star.svg';
import volunteer from '../assets/volunteer.svg';
import club from '../assets/club.svg';
import study from '../assets/study.svg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFAD0;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이 설정 */

`

const MainContainer = styled.div`
  border-radius: 40px;
  background-color: white;
  width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 3px 3px 3px #A6A6A6;
`

const SubContainer = styled.div`
  width: 352px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 10px;
`
const SubLineContainer = styled.div`
  width: 352px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: #A6A6A6 solid 1px;
  padding-left: 10px;

`

const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #484C52 ;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  width: 346px;
  height: 1px;
  margin-left: 15px;
  background: #a6a6a6;
`



export default function Community() {

    const navigate = useNavigate();
    const handleFreeBoardClick = () => {
        navigate('/free-board');
    };
    const handleMyWroteClick = () => {
        navigate('/my-wrote');
    };
    const handleClubClick = () => {
        navigate('/club');
    };
    const handleCommentClick = () => {
        navigate('/comment');
    };
    const handleScrapClick = () => {
        navigate('/scrap');
    };
    const handleStudyClick = () => {
        navigate('/study');
    };
    const handleVolunteerClick = () => {
        navigate('/volunteer');
    };

    return (
        <Container>
            <Title>헨젤과 그레텔의 속닥속닥</Title>
            <MainContainer>
                <SubLineContainer onClick={handleFreeBoardClick}><img src={freeBoard}/>자유 게시판</SubLineContainer>
                <SubLineContainer onClick={handleMyWroteClick}><img src={pencil}/>내가 쓴 글</SubLineContainer>
                <SubLineContainer onClick={handleCommentClick}><img src={message}/>댓글 단 글</SubLineContainer>
                <SubContainer onClick={handleScrapClick}><img src={star}/>스크랩한 글</SubContainer>
            </MainContainer>

            <Title>헨젤 X 대학생 그레텔</Title>
            <MainContainer>
                <SubLineContainer onClick={handleVolunteerClick}><img src={volunteer}/>봉사활동</SubLineContainer>
                <SubLineContainer onClick={handleClubClick}><img src={club}/>동아리 및 소모임</SubLineContainer>
                <SubContainer onClick={handleStudyClick}><img src={study}/>스터디</SubContainer>
            </MainContainer>
        </Container>
    );
}
