import React, { useState, useEffect } from 'react';
import whitePencil from '../../../assets/whitePencil.svg';
import {useNavigate} from 'react-router-dom';
import Header from '../../../components/header/Header';
import axios from 'axios';
import * as style from './style/FreeBoardStyle';

export default function FreeBoard() {
    const navigate = useNavigate();
    const [boardData, setBoardData] = useState([]);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 데이터를 가져오기 위해 useEffect 사용
        async function fetchData() {
            try {
                const response = await axios.get('http://15.165.25.19:8080/boards');
                setBoardData(response.data.body); // 가져온 데이터를 상태에 설정
            } catch (error) {
                console.error("Error fetching board data:", error);
            }
        }
        fetchData();
    }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

    const handleBoardClick = (boardId) => {
        navigate(`/free-board-post/${boardId}`);
    };
    const handleWriteClick = () => {
        navigate('/free-board-write');
    };

    return (
        <style.Div>
            <Header title='자유 게시판' />

            <style.MainContainer>
                {boardData.length > 0 && boardData.map((item, index) => (
                    <div key={item.boardId} onClick={() => handleBoardClick(item.boardId)}>
                        <style.ContentsContainer key={item.boardId}>
                            <style.TitleSummary>
                                <style.Title>{item.title}</style.Title>
                                <style.Summary>{item.contentSummary}</style.Summary>
                            </style.TitleSummary>
                            <style.Time>{item.createDatetime}</style.Time>
                        </style.ContentsContainer>
                    </div>
                ))}
            </style.MainContainer>

            <style.ButtonContainer>
                <style.Button onClick={handleWriteClick}>
                    <img src={whitePencil} alt="글쓰기 아이콘" />
                    글쓰기
                </style.Button>
            </style.ButtonContainer>
        </style.Div>
    );
}
