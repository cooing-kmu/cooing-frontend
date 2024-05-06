import React from 'react';
import styled from 'styled-components';
import hand from '../assets/hand.svg';
import faceImage from "../assets/faceImage.svg";

const MainContainer = styled.div`
  gap: 76px;
  margin-top: 270px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default function SignUp5() {
    return (
        <div>
            <MainContainer>
                <h2>찬우님</h2>
                <img src={hand} alt= "손"/>
                <h2>환영합니다!</h2>
            </MainContainer>
        </div>

    );
}
