import React, { useState,useEffect } from 'react';
import * as style from './style/ClubPostStyle';
import { useParams } from 'react-router-dom'
import Header from '../../../components/header/Header';
import axios from 'axios';
import defaultImage from '../../../assets/defaultImage.svg';


export default function ClubPost() {
    const { clubId } = useParams();
    const [clubData, setClubData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}club/${clubId}`,
                    {
                        headers:{
                            Authorization: window.localStorage.getItem('Authorization')
                        }
                    });
                setClubData(response.data.body);
            } catch (error) {
                console.error("스터디 데이터를 불러오는 중 오류 발생:", error);
            }
        }
        fetchData();
    }, [clubId]);

    return (
        <style.Div>
            <Header title='글쓰기' />

            <style.Container>
                <style.Title>
                    <style.TextContainer>
                        <style.Text>동아리 이름</style.Text>
                        <style.TextInput>{clubData ? clubData.title : "없음"}</style.TextInput>
                        <style.Text>분야</style.Text>
                        <style.TextInput>{clubData ? clubData.summary : "없음"} </style.TextInput>
                    </style.TextContainer>

                    <style.ImageContainer>
                        <img
                            src={clubData && clubData.imageUrl ? clubData.imageUrl : defaultImage}
                            alt="club profile"
                            style={{ width: '110px', height: '110px' }}  // 이미지 최대 크기 설정
                        />
                    </style.ImageContainer>
                </style.Title>

                <style.Detail>
                    <style.TextContainer>
                        <style.Text>모집기간</style.Text>
                        <style.TextInput>{clubData ? clubData.recruitDate : "없음"}</style.TextInput>
                    </style.TextContainer>

                    <style.TextContainer>
                        <style.Text>동아리 소개</style.Text>
                        <style.MainTextInput>{clubData ? clubData.content : "없음"}</style.MainTextInput>
                    </style.TextContainer>
                </style.Detail>
            </style.Container>

        </style.Div>
    );
}
