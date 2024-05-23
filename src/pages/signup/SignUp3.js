import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import axios from 'axios';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fc5c4c;
  margin-top: 16px;
  text-decoration: underline;
`;

const Font = styled.p`
  cursor: pointer;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  color: white;
  background-color: #fc5c4c;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export default function SignUp3() {
  const navigate = useNavigate();
  const [clickedItems, setClickedItems] = useState(Array(16).fill(false)); // 아이템의 개수에 맞게 초기 상태 설정
  const handleItemClick = (index) => {
    // 클릭된 아이템의 상태를 변경하기 위해 클릭된 아이템의 인덱스를 전달받음
    const newClickedItems = [...clickedItems]; // 기존 배열 복사
    newClickedItems[index] = !newClickedItems[index]; // 클릭된 아이템의 상태를 반전
    setClickedItems(newClickedItems); // 새로운 클릭된 아이템 배열로 상태 업데이트
  };

  const handleSignUpClick = async () => {
    const interests = clickedItems.map((item) => (item ? 1 : 0));
    try {
      const response = await axios.post('http://15.165.25.19:8080/signUp', {
        interests,
      });
      if (response.status === 200) {
        navigate('/sign-up4');
      } else {
        // Handle error
        console.error('Failed to submit interests');
      }
    } catch (error) {
      console.error('An error occurred while submitting interests:', error);
    }
  };

  return (
      <Div>
        <Header title="프로필 등록" />

        <Card
            clickedItems={clickedItems}
            handleItemClick={handleItemClick}
        />

        <ButtonContainer>
          <Button onClick={handleSignUpClick}>다음</Button>
          <Font onClick={handleSignUpClick}>매칭을 원하지 않습니다.</Font>
        </ButtonContainer>
      </Div>
  );
}
