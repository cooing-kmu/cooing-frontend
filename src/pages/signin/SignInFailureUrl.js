import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#FFFAD0;
  height: 100vh;
  font-size: 40px;
`;


export default function SignInFailureUrl() {
    return (
        <MainContainer>
            로그인 실패
        </MainContainer>
    );
}
