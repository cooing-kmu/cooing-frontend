import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './style/VolunteerWriteStyle'
import axios from 'axios';

export default function VolunteerWrite() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [recruitDate, setRecruitDate] = useState('');
    const [content, setContent] = useState('');

    const handleVolunteerClick = () => {
        // 백엔드로 데이터 전송
        const volunteerData = {
            title: title,
            summary: summary,
            imageUrl:"",
            recruitDate: recruitDate,
            content: content,
        };

        axios.post('http://15.165.25.19:8080/volunteer', volunteerData)
            .then(response => {
                console.log('volunteer1 created successfully:', response.data);
                alert('봉사활동이 성공적으로 생성되었습니다!');
                navigate('/volunteer1');
            })
            .catch(error => {
                console.error('There was an error creating the volunteer1!', error);
                alert('봉사활동 생성에 실패했습니다. 다시 시도해주세요.');
            });
    };

    return (
        <style.Div>
            <Header title='글쓰기' />

            <style.Container>
                <style.Title>
                    <style.TextContainer>
                        <style.TextInput
                            placeholder='봉사 지역'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>
                        <style.TextInput
                            placeholder='활동분야 ex)문화예술,재난현장'
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}/>
                    </style.TextContainer>
                </style.Title>

                <style.Detail>
                    <style.TextContainer>
                        <style.Text>모집기간</style.Text>
                        <style.TextInput
                            placeholder='ex) 04.04 ~ 04.23'
                            value={recruitDate}
                            onChange={(e) => setRecruitDate(e.target.value)}/>
                    </style.TextContainer>

                    <style.TextContainer>
                        <style.Text>동아리 소개</style.Text>
                        <style.MainTextInput
                            placeholder='봉사활동 소개글을 작성해주세요.'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </style.TextContainer>
                </style.Detail>
            </style.Container>

            <style.ButtonContainer>
                <style.Button onClick={handleVolunteerClick}>작성완료</style.Button>
            </style.ButtonContainer>
        </style.Div>
    )
}
