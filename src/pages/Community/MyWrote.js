import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../../components/header/Header';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  width: 370px;
  height: 750px;
  margin: 80px auto 0;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentsContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: #a6a6a6 solid 1px;
  cursor: pointer;
`;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

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
  color: #a6a6a6;
`;

export default function MyWrote() {
    const [posts, setPosts] = useState([]);
    const currentUserId = 1; // 실제로는 로그인한 사용자의 ID로 설정해야 합니다.

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://15.165.25.19:8080/board');
                console.log('API response:', response.data); // 응답 데이터 확인
                const filteredPosts = response.data.body.filter(post => post.createUserId === currentUserId);
                setPosts(filteredPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <Div>
            <Header title='내가 쓴 글' />

            <MainContainer>
                {posts.map((post) => (
                    <ContentsContainer key={post.boardId}>
                        <TitleSummary>
                            <Title>{post.title}</Title>
                            <Summary>{post.content}</Summary>
                        </TitleSummary>
                        <Time>{post.createDatetime}</Time>
                    </ContentsContainer>
                ))}
            </MainContainer>
        </Div>
    );
}
