import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 140px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 80px;
  gap: 50px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 60px;
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

const ClickHansel = styled.div`
  box-shadow: ${props => props.clicked ? '0px 0px 10px black;' : 'none'};
  background-color: #FFB3AC;
  width: 330px;
  height: 140px;
  border-radius: 28px;
`;

const ClickGretel = styled.div`
  box-shadow: ${props => props.clicked ? '0px 0px 10px black;' : 'none'};
  background-color: #FFD3AA;
  width: 330px;
  height: 140px;
  border-radius: 28px;
`;

export default function SignUp2() {
    const navigate = useNavigate();
    const [hanselClicked, setHanselClicked] = useState(false);
    const [gretelClicked, setGretelClicked] = useState(false);

    const HanselClick = () =>{
        setHanselClicked(true);
        setGretelClicked(false);
    }

    const GretelClick = () => {
        setGretelClicked(true);
        setHanselClicked(false);
    };

    const handleSignUpClick = () => {
        navigate('/sign-up3');
    };

    return (
        <div>
            <Paragraph>아래 해당되는 곳을 눌러주세요.</Paragraph>

            <MainContainer>
                <ClickHansel onClick={HanselClick} clicked={hanselClicked}/>
                <ClickGretel onClick={GretelClick} clicked={gretelClicked}/>
            </MainContainer>

            <ButtonContainer>
                <Button onClick={handleSignUpClick}>다음</Button>
            </ButtonContainer>
        </div>
    );
}
