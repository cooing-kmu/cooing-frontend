import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import chanwoo from '../../../assets/chawoo.jpeg'
import thumb from '../../../assets/thumbIcon.svg'
import message from '../../../assets/messageIcon.svg'
import star from '../../../assets/starIcon.svg'
import messageSend from '../../../assets/messageSend.svg'
import * as style from './Style/FreeBoardPostStyle'
import * as Style from './Style/FreeBoardStyle'
import {Button} from "./Style/FreeBoardPostStyle";


export default function FreeBoard() {
    const navigate = useNavigate()
    const handleWriteClick = () => {
        navigate('/free-board-write')
    }
    const [thumbCount, setThumbCount] = useState(0);

    const handleThumbClick = () => {
        setThumbCount(prevCount => prevCount + 1);
    };


    return (
        <>
            <Header title='게시글' />

            <style.MainContainer>

                <style.TitleContainer>
                    <style.ProfileContainer>
                        <style.ProfileImage src={chanwoo}/>
                        <style.ProfileTextContainer>
                            <style.ProfileTextName>찬우</style.ProfileTextName>
                            <style.ProfileTextTime>04/01 20:20</style.ProfileTextTime>
                        </style.ProfileTextContainer>
                    </style.ProfileContainer>

                    <style.Title>알파 화이팅</style.Title>

                    <style.Detail>코딩 재밌다~</style.Detail>

                    <style.IconContainer>
                        <style.ThumbIcon><img src={thumb}/>{thumbCount}</style.ThumbIcon>
                        <style.MessageIcon><img src={message}/>0</style.MessageIcon>
                        <style.StarIcon><img src={star}/>0</style.StarIcon>
                    </style.IconContainer>

                    <style.ButtonContainer>
                        <Button onClick={handleThumbClick}>공감</Button>
                        <Button>스크랩</Button>
                    </style.ButtonContainer>
                </style.TitleContainer>

                <style.PostContainer>
                    {style.detailData.map((item, index) => (
                        <Style.ContentsContainer>
                            <Style.TitleSummary key={index}>
                                <Style.Title>{item.Title}</Style.Title>
                                <Style.Summary>{item.summary}</Style.Summary>
                            </Style.TitleSummary>
                            <Style.Time>{item.time}</Style.Time>
                        </Style.ContentsContainer>
                    ))}
                </style.PostContainer>

                <style.CommentContainer>
                    <style.Comment placeholder="댓글을 입력하세요." />
                    <style.MessageSend src={messageSend} alt="메시지 보내기" />
                </style.CommentContainer>
            </style.MainContainer>
        </>
    )
}
