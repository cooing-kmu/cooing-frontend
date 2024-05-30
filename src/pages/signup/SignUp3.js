// import styled from "styled-components";
// import Header from '../../components/header/Header';
// import { useNavigate, useLocation } from 'react-router-dom';
// import React, { useState } from 'react';
// import InterestCard from '../../components/card/InterestCard';
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
// const Font = styled.p`
//   cursor: pointer;
//   color: #fc5c4c;
//   border-bottom: #fc5c4c solid 1px;
// `;
//
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }
//
// export default function SignUp3() {
//     const navigate = useNavigate();
//     const query = useQuery();
//     const nickname = query.get("nickname");
//     const profileMessage = query.get("profileMessage");
//     const role = query.get("role");
//
//     const [clickedItems, setClickedItems] = useState(Array(16).fill(false)); // 아이템의 개수에 맞게 초기 상태 설정
//
//     const handleItemClick = (index) => {
//         const newClickedItems = [...clickedItems]; // 기존 배열 복사
//         newClickedItems[index] = !newClickedItems[index]; // 클릭된 아이템의 상태를 반전
//         setClickedItems(newClickedItems); // 새로운 클릭된 아이템 배열로 상태 업데이트
//     };
//
//     const handleSignUpClick = () => {
//         const interestKeyword = clickedItems.map(item => (item ? 1 : 0));
//         navigate(`/sign-up4?nickname=${encodeURIComponent(nickname)}&profileMessage=${encodeURIComponent(profileMessage)}&role=${role}&interestKeyword=${JSON.stringify(interestKeyword)}`);
//     };
//
//     return (
//         <MainContainer>
//             <Header title='프로필 등록' />
//             <InterestCard
//                 clickedItems={clickedItems}
//                 handleItemClick={handleItemClick}
//                 isClickable={true}
//                 buttonName={'다음'}
//             />
//             <Font onClick={handleSignUpClick}>매칭을 원하지 않습니다.</Font>
//         </MainContainer>
//     );
// }


import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'

const Div = styled.div`
  display: flex;
  flex-direction: column;
`
const MainContainer = styled.div`
  gap: 16px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: calc(100vh - 224px);
  &::-webkit-scrollbar {
    display: none;
  }
`

const SubContainer = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 200;
`

const ItemContainer = styled.div`
  width: 160px;
  height: 134px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  border: ${(props) =>
    props.clicked ? '2px solid #FC5C4C;' : '2px solid #C4C4C4'};
`

const TextContainer = styled.div`
  margin-right: 200px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fc5c4c;
  margin-top: 16px;
  text-decoration: underline;
`

const Font = styled.p`
  cursor: pointer;
`

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  color: white;
  background-color: #fc5c4c;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`

export default function SignUp3() {
    const navigate = useNavigate()
    const handleSignUpClick = () => {
        navigate('/sign-up4')
    }

    const [clickedItems, setClickedItems] = useState(Array(16).fill(false)) // 아이템의 개수에 맞게 초기 상태 설정
    const handleItemClick = (index) => {
        // 클릭된 아이템의 상태를 변경하기 위해 클릭된 아이템의 인덱스를 전달받음
        const newClickedItems = [...clickedItems] // 기존 배열 복사
        newClickedItems[index] = !newClickedItems[index] // 클릭된 아이템의 상태를 반전
        setClickedItems(newClickedItems) // 새로운 클릭된 아이템 배열로 상태 업데이트
    }

    return (
        <Div>
            <Header title='프로필 등록' />

            <MainContainer>
                <TextContainer>
                    <h3>나의 관심 분야를</h3>
                    <p>3개 이상 선택해주세요.</p>
                </TextContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(0)}
                        clicked={clickedItems[0]}
                    >
                        <h1>🍳</h1>요리
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(1)}
                        clicked={clickedItems[1]}
                    >
                        <h1>🏃🏻</h1>스포츠
                    </ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(2)}
                        clicked={clickedItems[2]}
                    >
                        <h1>📖</h1>독서
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(3)}
                        clicked={clickedItems[3]}
                    >
                        <h1>🧘🏻</h1>건강
                    </ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(4)}
                        clicked={clickedItems[4]}
                    >
                        <h1>🧑🏻‍💻</h1>게임
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(5)}
                        clicked={clickedItems[5]}
                    >
                        <h1>🛍️</h1>쇼핑
                    </ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(6)}
                        clicked={clickedItems[6]}
                    >
                        <h1>💗</h1>연애
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(7)}
                        clicked={clickedItems[7]}
                    >
                        <h1>🎵</h1>음악
                    </ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(8)}
                        clicked={clickedItems[8]}
                    >
                        <h1>🎨</h1>미술
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(9)}
                        clicked={clickedItems[9]}
                    >
                        <h1>🎇</h1>공연
                    </ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(10)}
                        clicked={clickedItems[10]}
                    >
                        <h1>💄</h1>뷰티
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(11)}
                        clicked={clickedItems[11]}
                    >
                        <h1>🤝🏻</h1>봉사
                    </ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(12)}
                        clicked={clickedItems[12]}
                    >
                        <h1>🎞️</h1>영화
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(13)}
                        clicked={clickedItems[13]}
                    >
                        <h1>📘</h1>만화
                    </ItemContainer>
                </SubContainer>

                <SubContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(14)}
                        clicked={clickedItems[14]}
                    >
                        <h1>🖼️</h1>전시
                    </ItemContainer>
                    <ItemContainer
                        onClick={() => handleItemClick(15)}
                        clicked={clickedItems[15]}
                    >
                        <h1>🐶</h1>동물
                    </ItemContainer>
                </SubContainer>
            </MainContainer>

            <ButtonContainer>
                <Button onClick={handleSignUpClick}>다음</Button>
                <Font onClick={handleSignUpClick}>매칭을 원하지 않습니다.</Font>
            </ButtonContainer>
        </Div>
    )
}