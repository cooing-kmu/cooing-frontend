import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './style/StudyPostStyle'
import axios from 'axios';

export default function StudyPost() {
    const { studyId } = useParams();
    const [studyData, setStudyData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://15.165.25.19:8080/study/${studyId}`);
                setStudyData(response.data.body);
                console.log(response.data.body); // studyData 상태를 출력
            } catch (error) {
                console.error("스터디 데이터를 불러오는 중 오류 발생:", error);
            }
        }
        fetchData();
    }, [studyId]);

    return (
        <style.Div>
            <Header title='글쓰기' />

            <style.Container>

                <style.Title>
                    <style.TextContainer>
                        <style.Text>스터디 이름</style.Text>
                        <style.TextInput>{studyData ? studyData.title : "없음"}</style.TextInput>
                        <style.Text>분야</style.Text>
                        <style.TextInput>{studyData ? studyData.category : "없음"}</style.TextInput>
                    </style.TextContainer>
                </style.Title>

                <style.Detail>
                    <style.TextContainer>
                        <style.Text>모집인원</style.Text>
                        <style.TextInput>{studyData ? studyData.numberOfMembers : 0}명</style.TextInput>
                    </style.TextContainer>

                    <style.TextContainer>
                        <style.Text>동아리 소개</style.Text>
                        <style.MainTextInput>{studyData ? studyData.content : "없음"}</style.MainTextInput>
                    </style.TextContainer>
                </style.Detail>

            </style.Container>
        </style.Div>
    );
}
