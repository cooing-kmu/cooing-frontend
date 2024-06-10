import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/header/Header'
import faceImage from '../../../assets/icons/icon-user.svg'
import thumb from '../../../assets/icons/icon-like.svg'
import message from '../../../assets/icons/icon-comment-b.svg'
import star from '../../../assets/icons/icon-star-y.svg'
import messageSend from '../../../assets/icons/icon-send.svg'
import * as style from './style/FreeBoardPostStyle'
import axios from 'axios'

export default function FreeBoardPost() {
  const { boardId } = useParams()
  const [comment, setComment] = useState('')
  const [boardData, setBoardData] = useState(null)
  const [comments, setComments] = useState([])
  const [hasLiked, setHasLiked] = useState(false)
  const [hasScrap, setHasScrap] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('') // 모달 메시지 상태 추가
  const [profileImage, setProfileImage] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}board/${boardId}`,
            {
              headers: {
                Authorization: window.localStorage.getItem('Authorization'),
              },
            }
        )
        const data = response.data.body
        setBoardData(data)
        setComments(data.comments)
        if (data.createUserIconUrl) {
          setProfileImage(data.createUserIconUrl)
        } else {
          setProfileImage(faceImage)
        }
      } catch (error) {
        console.error('보드 데이터를 불러오는 중 오류 발생:', error)
      }
    }
    fetchData()
  }, [boardId])

  const handleThumbClick = async () => {
    if (!hasLiked) {
      try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}board/${boardId}/likes`,
            {},
            {
              headers: {
                Authorization: window.localStorage.getItem('Authorization'),
              },
            }
        )
        if (response.status === 200) {
          // 좋아요 수 업데이트
          setBoardData((prevData) => ({
            ...prevData,
            likesCount: prevData.likesCount + 1,
          }))
          setHasLiked(true)
          setModalMessage('공감을 하였습니다.') // 모달 메시지 설정
          setShowModal(true)
        }
      } catch (error) {
        console.error('좋아요를 전송하는 중 오류 발생:', error)
      }
    }
  }

  const handleScrapClick = async () => {
    if (!hasScrap) {
      try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}board/${boardId}/scrap`,
            {},
            {
              headers: {
                Authorization: window.localStorage.getItem('Authorization'),
              },
            }
        )
        if (response.status === 200) {
          // 스크랩 수 업데이트
          setBoardData((prevData) => ({
            ...prevData,
            scrapCount: prevData.scrapCount + 1,
          }))
          setHasScrap(true)
          setModalMessage('스크랩 되었습니다.') // 모달 메시지 설정
          setShowModal(true)
        }
      } catch (error) {
        console.error('스크랩을 전송하는 중 오류 발생:', error)
      }
    }
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleCommentClick = async () => {
    try {
      await axios.post(
          `${process.env.REACT_APP_BASE_URL}board/${boardId}/comment`,
          {
            content: comment,
          },
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
      )
      setComment('')
      // 댓글 목록을 다시 불러오기
      const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}board/${boardId}`,
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
      )
      setComments(response.data.body.comments)
      setBoardData((prevData) => ({
        ...prevData,
        commentCount: prevData.commentCount + 1,
      }))
    } catch (error) {
      console.error('댓글을 전송하는 중 오류 발생:', error)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
      <>
        <Header title='게시글' />
        <style.MainContainer>
          <style.TitleContainer>
            <style.ProfileContainer>
              <div>
                <img
                    src={profileImage}
                    style={{ width: '38px', height: '38px', borderRadius: 10 }}
                    alt='회원가입 얼굴'
                />
              </div>
              <style.ProfileTextContainer>
                <style.ProfileTextName>
                  {boardData ? boardData.createUserName : '알수없음'}
                </style.ProfileTextName>
                <style.ProfileTextTime>
                  {boardData ? boardData.createDatetime : '00/00 00:00'}
                </style.ProfileTextTime>
              </style.ProfileTextContainer>
            </style.ProfileContainer>

            <style.Title>
              {boardData ? boardData.title : '로딩 중...'}
            </style.Title>
            <style.Detail>
              {boardData ? boardData.content : '로딩 중...'}
            </style.Detail>
            <style.IconContainer>
              <style.ThumbIcon>
                <img src={thumb} alt={'좋아요'} />
                {boardData ? boardData.likesCount : 0}
              </style.ThumbIcon>
              <style.MessageIcon>
                <img src={message} alt={'메세지'} />
                {boardData ? boardData.commentCount : 0}
              </style.MessageIcon>
              <style.StarIcon>
                <img src={star} alt={'스크랩'} />
                {boardData ? boardData.scrapCount : 0}
              </style.StarIcon>
            </style.IconContainer>

            <style.ButtonContainer>
              <style.Button onClick={handleThumbClick} disabled={hasLiked}>
                공감
              </style.Button>
              <style.Button onClick={handleScrapClick} disabled={hasScrap}>
                스크랩
              </style.Button>
            </style.ButtonContainer>

            <style.PostContainer>
              {comments.map((comment) => (
                  <style.ContentsContainer key={comment.commentId}>
                    <style.TitleSummary>
                      <style.commentTitle>
                        {comment.createUserName}
                      </style.commentTitle>
                      <style.Summary>{comment.content}</style.Summary>
                    </style.TitleSummary>
                    <style.Time>{comment.createDatetime}</style.Time>
                  </style.ContentsContainer>
              ))}
            </style.PostContainer>

            <style.CommentContainer>
              <style.Comment
                  placeholder='댓글을 입력하세요.'
                  value={comment}
                  onChange={handleCommentChange}
              />
              <style.MessageSend
                  onClick={handleCommentClick}
                  src={messageSend}
                  alt='메시지 보내기'
              />
            </style.CommentContainer>
          </style.TitleContainer>
        </style.MainContainer>

        {showModal && (
            <style.Modal>
              <style.ModalContainer>
                <p>{modalMessage}</p> {/* 모달 메시지 표시 */}
                <style.Button onClick={closeModal}>닫기</style.Button>
              </style.ModalContainer>
            </style.Modal>
        )}
      </>
  )
}
