import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './Style/StudyWriteStyle'

export default function StudyWrite() {
    const navigate = useNavigate()
    const handleStudyClick = () => {
        navigate('/study')
    }

    return (
        <style.Div>
            <Header title='글쓰기' />

            <style.Container>
                <style.Title>
                    <style.TextContainer>
                        <style.TextInput placeholder='스터디 이름' />
                        <style.TextInput placeholder='분야 ex) 코딩, 수학, 국어' />
                    </style.TextContainer>
                </style.Title>

                <style.Detail>
                    <style.TextContainer>
                        <style.Text>모집기간</style.Text>
                        <style.TextInput placeholder='ex) 04/04 ~ 04/23' />
                    </style.TextContainer>

                    <style.TextContainer>
                        <style.Text>동아리 소개</style.Text>
                        <style.MainTextInput placeholder='동아리 소개글을 작성해주세요.' />
                    </style.TextContainer>
                </style.Detail>
            </style.Container>

            <style.ButtonContainer>
                <style.Button onClick={handleStudyClick}>작성완료</style.Button>
            </style.ButtonContainer>
        </style.Div>
    )
}
