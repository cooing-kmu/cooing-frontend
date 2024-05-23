import React, {useEffect, useState} from 'react'
import whitePencil from '../../../assets/whitePencil.svg'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './style/StudyStyle'
import axios from 'axios';

export default function Study() {
    const navigate = useNavigate()
    const [studyData, setStudyData] = useState([]);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 데이터를 가져오기 위해 useEffect 사용
        async function fetchData() {
            try {
                const response = await axios.get('http://15.165.25.19:8080/studies');
                setStudyData(response.data.body); // 가져온 데이터를 상태에 설정
            } catch (error) {
                console.error("Error fetching board data:", error);
            }
        }
        fetchData();
    }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정


    const handleWriteClick = () => {
        navigate('/study-write')
    }

    return (
        <style.Div>
            <Header title='스터디' />

            <style.MainContainer>
                {studyData.length > 0 && studyData.map((item, index) => (
                    <Link to={`/${item.studyId}`} style={{textDecoration:"none", color:"black"}}>
                        <style.ContentsContainer>
                            <style.TitleSummary key={item.studyId}>
                                <style.Title>{item.Title}</style.Title>
                                <style.Summary>{item.category}</style.Summary>
                            </style.TitleSummary>
                        </style.ContentsContainer>
                    </Link>

                ))}
            </style.MainContainer>

            <style.ButtonContainer>
                <style.Button onClick={handleWriteClick}>
                    <img src={whitePencil} />
                    글쓰기
                </style.Button>
            </style.ButtonContainer>
        </style.Div>
    )
}
