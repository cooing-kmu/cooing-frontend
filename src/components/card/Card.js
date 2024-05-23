import React from 'react';
import styled from 'styled-components';

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
  border: ${(props) =>
    props.clicked ? '2px solid #FC5C4C;' : '2px solid #C4C4C4'};
`;

const TextContainer = styled.div`
  margin-right: 200px;
`;

const Card = ({ clickedItems, handleItemClick }) => {
    return (
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
    );
};

export default Card;
