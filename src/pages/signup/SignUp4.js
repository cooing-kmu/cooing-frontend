// import styled from "styled-components";
// import Header from '../../components/header/Header';
// import { useNavigate, useLocation } from 'react-router-dom';
// import React, { useState } from 'react';
// import ThinkCard from '../../components/card/ThinkCard';
//
// const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #fff;
//   height: 100vh;
//   width: 100%;
// `;
//
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }
//
// export default function ThinkEdit() {
//     const navigate = useNavigate();
//     const query = useQuery();
//     const nickname = query.get("nickname");
//     const profileMessage = query.get("profileMessage");
//     const role = query.get("role");
//     const interestKeyword = JSON.parse(query.get("interestKeyword"));
//
//     const [clickedItems, setClickedItems] = useState(Array(8).fill(false)); // 아이템의 개수에 맞게 초기 상태 설정
//
//     const handleItemClick = (index) => {
//         const newClickedItems = [...clickedItems]; // 기존 배열 복사
//         newClickedItems[index] = !newClickedItems[index]; // 클릭된 아이템의 상태를 반전
//         setClickedItems(newClickedItems); // 새로운 클릭된 아이템 배열로 상태 업데이트
//     };
//
//     const handleSubmit = async () => {
//         const concernKeyword = clickedItems.map(item => (item ? 1 : 0));
//         const userData = {
//             nickname,
//             profileMessage,
//             role,
//             interestKeyword,
//             concernKeyword
//         };
//         console.log('POST data:', userData); // POST할 데이터를 콘솔에 출력
//
//         try {
//             const response = await fetch('/15.165.25.19:8080/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(userData),
//             });
//
//             if (response.ok) {
//                 navigate('/sign-up5'); // 성공 시 성공 페이지로 이동
//             } else {
//                 console.error('회원가입 실패');
//             }
//         } catch (error) {
//             console.error('회원가입 중 오류 발생:', error);
//         }
//     };
//
//     return (
//         <MainContainer>
//             <Header title='프로필 등록' />
//
//             <ThinkCard
//                 clickedItems={clickedItems}
//                 handleItemClick={handleItemClick}
//                 isClickable={true}
//                 buttonName={'완료'}
//                 onButtonClick={handleSubmit} // ThinkCard에서 버튼 클릭 시 handleSubmit 호출
//             />
//         </MainContainer>
//     );
// }

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header'

const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const MainContainer = styled.div`
  gap: 16px;
  margin-top: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
`;

const SubContainer = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 200;
`;

const ItemContainer = styled.div`
  width: 160px;
  height: 134px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  border: ${props => props.clicked ? '2px solid #FC5C4C;' : '2px solid #C4C4C4'};
`;

const TextContainer = styled.div`
  margin-right: 200px;
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
`;

export default function SignUp4() {
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate('/sign-up5');
    };

    const [clickedItems, setClickedItems] = useState(Array(8).fill(false)); // 아이템의 개수에 맞게 초기 상태 설정

    const handleItemClick = (index) => {
        // 클릭된 아이템의 상태를 변경하기 위해 클릭된 아이템의 인덱스를 전달받음
        const newClickedItems = [...clickedItems]; // 기존 배열 복사
        newClickedItems[index] = !newClickedItems[index]; // 클릭된 아이템의 상태를 반전
        setClickedItems(newClickedItems); // 새로운 클릭된 아이템 배열로 상태 업데이트
    };

    return (
        <Div>
            <Header title='프로필 등록' />

            <MainContainer>
                <TextContainer>
                    <h3>도움 받을 분야를</h3>
                    <p>3개 이상 선택해주세요.</p>
                </TextContainer>

                <SubContainer>
                    <ItemContainer onClick={() => handleItemClick(0)} clicked={clickedItems[0]}><h1>💰</h1>소득</ItemContainer>
                    <ItemContainer onClick={() => handleItemClick(1)} clicked={clickedItems[1]}><h1>🏠</h1>주거</ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer onClick={() => handleItemClick(2)} clicked={clickedItems[2]}><h1>👕</h1>생활</ItemContainer>
                    <ItemContainer onClick={() => handleItemClick(3)} clicked={clickedItems[3]}><h1>💳</h1>금융</ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer onClick={() => handleItemClick(4)} clicked={clickedItems[4]}><h1>🧠</h1>심리정서</ItemContainer>
                    <ItemContainer onClick={() => handleItemClick(5)} clicked={clickedItems[5]}><h1>🏫</h1>진학</ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer onClick={() => handleItemClick(6)} clicked={clickedItems[6]}><h1>💼</h1>취업</ItemContainer>
                    <ItemContainer onClick={() => handleItemClick(7)} clicked={clickedItems[7]}><h1>📚</h1>멘토링</ItemContainer>
                </SubContainer>

                <Button onClick={handleSignUpClick}>다음</Button>
            </MainContainer>
        </Div>
    );
}