import React from 'react';
import styled from 'styled-components';
import cooingLogo from '../assets/cooingLogo.svg';
import google from '../assets/google.svg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#FFFAD0;
  height: 100vh;
  gap:360px;
`;

const TitleContainer = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align:right;
  font-size:14px;
`;
const LoginButton = styled.a`
  width:312px;
  height:52px;
  border-radius: 20px;
  background-color:white;
  border: none;
  font-weight: 600;
  font-size: 16px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  text-decoration: none;
  color: black; 
`


export default function SignIn() {
  return(
        <MainContainer>
            <TitleContainer>
                <img src={cooingLogo} alt="로고" />
                for 자립준비청년
            </TitleContainer>
            <LoginButton href="http://www.cooing.n-e.kr:8080/oauth2/authorization/google" target="_blank">
                <img src={google} alt="로고" /> Google 로그인
            </LoginButton>
        </MainContainer>
  )
};