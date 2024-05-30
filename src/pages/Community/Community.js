import React from 'react'
import styled from 'styled-components'
import freeBoard from '../../assets/freeBoard.svg'
import pencil from '../../assets/pencil.svg'
import message from '../../assets/message.svg'
import star from '../../assets/star.svg'
import volunteer from '../../assets/volunteer.svg'
import club from '../../assets/club.svg'
import study from '../../assets/study.svg'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fffad0;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이 설정 */
`

const MainContainer = styled.div`
  border-radius: 40px;
  background-color: white;
  width: 376px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);
`

const SubLineContainer = styled.div`
  width: 346px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: 20px;
`

const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #484c52;
  margin-top: 70px;
`

const Line = styled.div`
  display: flex;
  width: 346px;
  height: 1px;
  background: #a6a6a6;
`

export default function Community() {
  const navigate = useNavigate()
  const handleFreeBoardClick = () => {
    navigate('/free-board')
  }
  const handleMyWroteClick = () => {
    navigate('/my-wrote')
  }
  const handleClubClick = () => {
    navigate('/club')
  }
  const handleCommentClick = () => {
    navigate('/comment')
  }
  const handleScrapClick = () => {
    navigate('/scrap')
  }
  const handleStudyClick = () => {
    navigate('/study')
  }
  const handleVolunteerClick = () => {
    navigate('/volunteer')
  }

  return (
    <Container>
      <Title>헨젤과 그레텔의 속닥속닥</Title>
      <MainContainer>

        <SubLineContainer onClick={handleFreeBoardClick}>
            <img src={freeBoard} alt={"img"}/>
            자유 게시판
        </SubLineContainer>
        <Line/>

        <SubLineContainer onClick={handleMyWroteClick}>
          <img src={pencil} alt={"img"}/>
          내가 쓴 글
        </SubLineContainer>
        <Line/>

        <SubLineContainer onClick={handleCommentClick}>
          <img src={message} alt={"img"}/>
          댓글 단 글
        </SubLineContainer>
        <Line/>

        <SubLineContainer onClick={handleScrapClick}>
          <img src={star} alt={"img"}/>
          스크랩한 글
        </SubLineContainer>

      </MainContainer>

      <Title>헨젤 X 대학생 그레텔</Title>
      <MainContainer>

        <SubLineContainer onClick={handleVolunteerClick}>
          <img src={volunteer} alt={"img"}/>
          봉사활동
        </SubLineContainer>
        <Line/>

        <SubLineContainer onClick={handleClubClick}>
          <img src={club} alt={"img"}/>
          동아리 및 소모임
        </SubLineContainer>
        <Line/>

        <SubLineContainer onClick={handleStudyClick}>
          <img src={study} alt={"img"}/>
          스터디
        </SubLineContainer>

      </MainContainer>

      <Footer />
    </Container>
  )
}
