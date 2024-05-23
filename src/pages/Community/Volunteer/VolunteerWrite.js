import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './style/VolunteerWriteStyle'

export default function VolunteerWrite() {
    const navigate = useNavigate()
    const handleStudyClick = () => {
        navigate('/volunteer')
    }

    return (
        <style.Div>
            <Header title='글쓰기' />

            <style.Container>
                <style.Title>
                    <style.TextContainer>
                        <style.TextInput placeholder='봉사 지역' />
                        <style.TextInput placeholder='활동분야 ex)문화예술,재난재해' />
                    </style.TextContainer>
                </style.Title>

                <style.Detail>
                    <style.TextContainer>
                        <style.Text>모집기간</style.Text>
                        <style.TextInput placeholder='ex) 04/04 ~ 04/23' />
                    </style.TextContainer>

                    <style.TextContainer>
                        <style.Text>동아리 소개</style.Text>
                        <style.MainTextInput placeholder='봉사활동 소개글을 작성해주세요.' />
                    </style.TextContainer>
                </style.Detail>
            </style.Container>

            <style.ButtonContainer>
                <style.Button onClick={handleStudyClick}>작성완료</style.Button>
            </style.ButtonContainer>
        </style.Div>
    )
}
