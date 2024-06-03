import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import hand from '../../assets/hand.svg';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { roleState, nicknameState, profileMessageState, profileImageState, interestState, concernKeywordState, isMatchingActiveState } from '../../Atom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  gap: 76px;
  margin-top: 270px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default function SignUp5() {
    const [role, setRole] = useRecoilState(roleState);
    const [nickname, setNickname] = useRecoilState(nicknameState);
    const [profileMessage, setProfileMessage] = useRecoilState(profileMessageState);
    const [profileImage, setProfileImage] = useRecoilState(profileImageState);
    const [interestKeyword, setInterestKeyword] = useRecoilState(interestState);
    const [concernKeywords, setConcernKeywords] = useRecoilState(concernKeywordState);
    const [isMatchingActive, setIsMatchingActive] = useRecoilState(isMatchingActiveState);
    const location = useLocation();
    const Navigate = useNavigate();
    const userId = location.state?.userId;

    // Recoil 상태를 리셋하는 함수
    const resetRecoilState = () => {
        setRole('');
        setNickname('');
        setProfileMessage('');
        setProfileImage('');
        setInterestKeyword(Array(16).fill(0));
        setConcernKeywords(Array(8).fill(0));
        setIsMatchingActive('ture');
    };
    useEffect(() => {
        // 3초 후에 메인 페이지로 이동
        const timer = setTimeout(() => {
            Navigate('/'); // 이동할 경로를 설정
        }, 3000); // 3초 후에 이동하도록 설정

        // 컴포넌트가 언마운트될 때 타이머 해제
        return () => clearTimeout(timer);
    }, [Navigate]);

    useEffect(() => {
        return () => {
            resetRecoilState(); // 컴포넌트가 언마운트될 때 Recoil 상태를 리셋
        };
    }, []);

    useEffect(() => {
        // 백엔드에서 nickname 가져오는 API 호출
        const fetchNickname = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}users`);
                const users = response.data.body;
                const currentUser = users.find(user => user.id === userId);
                if (currentUser) {
                    setNickname(currentUser.username);
                }
                console.log(response.data.body.id)
            } catch (error) {
                console.error('Error fetching nickname:', error);
            }
        };
        // nickname 가져오는 API 호출
        fetchNickname();
    }, []);

    return (
        <Div>
            <MainContainer>

                    <>
                        <h2>{nickname}님</h2>
                        <img src={hand} alt="손" />
                        <h2>환영합니다!</h2>
                    </>

            </MainContainer>
        </Div>
    );
}
