import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/header/Header';
import chanwoo from '../../../assets/chawoo.jpeg';
import thumb from '../../../assets/thumbIcon.svg';
import message from '../../../assets/messageIcon.svg';
import star from '../../../assets/starIcon.svg';
import messageSend from '../../../assets/messageSend.svg';
import * as style from './style/FreeBoardPostStyle';
import {Button} from "./style/FreeBoardPostStyle";
import axios from 'axios';

export default function FreeBoardPost() {
    const { boardId } = useParams();
    const [thumbCount, setThumbCount] = useState(0);
    const [comment, setComment] = useState('');
    const [boardData, setBoardData] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://15.165.25.19:8080/board/${boardId}`);
                setBoardData(response.data.body);
                setComments(response.data.body.comments);
                console.log("data:", response.data.body); // 데이터가 올바르게 들어왔는지 확인하기 위한 콘솔 출력
            } catch (error) {
                console.error("보드 데이터를 불러오는 중 오류 발생:", error);
            }
        }
        fetchData();
    }, [boardId]);

    const handleThumbClick = () => {
        setThumbCount(prevCount => prevCount + 1);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentClick = async () => {
        try {
            await axios.post(
                `http://15.165.25.19:8080/board/${boardId}/comment`,
                {
                    content: comment,
                }
            );
            setComment('');
            // 댓글 목록을 다시 불러오기
            const response = await axios.get(`http://15.165.25.19:8080/board/${boardId}`);
            setComments(response.data.body.comments);
        } catch (error) {
            console.error("댓글을 전송하는 중 오류 발생:", error);
        }
    };

    return (
        <>
            <Header title='게시글' />
            <style.MainContainer>
                <style.TitleContainer>
                    <style.ProfileContainer>
                        <style.ProfileImage src={chanwoo} />
                        <style.ProfileTextContainer>
                            <style.ProfileTextName>{boardData ? boardData.createUserId : '알수없음'}</style.ProfileTextName>
                            <style.ProfileTextTime>{boardData ? boardData.createDatetime : '00/00 00:00'}</style.ProfileTextTime>
                        </style.ProfileTextContainer>
                    </style.ProfileContainer>

                    <style.Title>{boardData ? boardData.title : '로딩 중...'}</style.Title>
                    <style.Detail>{boardData ? boardData.content : '로딩 중...'}</style.Detail>
                    <style.IconContainer>
                        <style.ThumbIcon><img src={thumb} alt={"좋아요"}/>{boardData ? boardData.likeCount : 0}</style.ThumbIcon>
                        <style.MessageIcon><img src={message} alt={"메세지"}/>{boardData ? boardData.commentCount : 0}</style.MessageIcon>
                        <style.StarIcon><img src={star} alt={"스크랩"}/>{boardData ? boardData.scrapCount : 0}</style.StarIcon>
                    </style.IconContainer>

                    <style.ButtonContainer>
                        <Button onClick={handleThumbClick}>공감</Button>
                        <Button>스크랩</Button>
                    </style.ButtonContainer>

                    <style.PostContainer>
                        {comments.map((comment) => (
                            <style.ContentsContainer key={comment.commentId}>
                                <style.TitleSummary>
                                    <style.commentTitle>{comment.createUserName}</style.commentTitle>
                                    <style.Summary>{comment.content}</style.Summary>
                                </style.TitleSummary>
                                <style.Time>{comment.createDatetime}</style.Time>
                            </style.ContentsContainer>
                        ))}
                    </style.PostContainer>

                    <style.CommentContainer>
                        <style.Comment
                            placeholder="댓글을 입력하세요."
                            value={comment}
                            onChange={handleCommentChange}
                        />
                        <style.MessageSend onClick={handleCommentClick} src={messageSend} alt="메시지 보내기" />
                    </style.CommentContainer>
                </style.TitleContainer>
            </style.MainContainer>
        </>
    );
}
