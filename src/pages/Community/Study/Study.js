import React from 'react'
import whitePencil from '../../../assets/whitePencil.svg'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import * as style from './Style/StudyStyle'

export default function Study() {
    const navigate = useNavigate()
    const handleWriteClick = () => {
        navigate('/study-write')
    }

    return (
        <style.Div>
            <Header title='스터디' />

            <style.MainContainer>
                {style.detailData.map((item, index) => (
                    <style.ContentsContainer>
                        <style.TitleSummary key={index}>
                            <style.Title>{item.Title}</style.Title>
                            <style.Summary>{item.summary}</style.Summary>
                        </style.TitleSummary>
                        <style.Time>{item.time}</style.Time>
                    </style.ContentsContainer>
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
