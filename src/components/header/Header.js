import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as style from './Styles'
import { ReactComponent as Ic_ArrowLeftBk } from '../../assets/icons/icon-arrow-l-bk.svg'
import { ReactComponent as Ic_ArrowLeftWh } from '../../assets/icons/icon-arrow-l-wh.svg'
import { ReactComponent as Ic_Pencil } from '../../assets/icons/icon-pencil.svg'
import { ReactComponent as Ic_Search } from '../../assets/icons/icon-search.svg'
import { ReactComponent as Ic_More } from '../../assets/icons/icon-more.svg'

export default function Header(props) {
  const navigate = useNavigate()
  const TwoHeaderNameList = [
    '프로필 등록',
    '회원 정보 등록',
    '매칭 정보 등록',
    '지원정책',
    '지원사업',
    '채용공고',
    '지원정책 스크랩 목록',
    'MATE 정보',
    '알림',
    '자립 체크리스트',
    '프로필 변경',
    '매칭 정보 변경',
  ]
  const ThreeHeaderNameList = [
    '자유 게시판', // 돋보기
    '게시글', // 햄버거
    '내가 쓴 글', // 돋보기
    '댓글 단 글', // 돋보기
    '스크랩한 글', // 돋보기
    '봉사활동', // 돋보기
    '동아리 및 소모임', // 돋보기
    '스터디', // 돋보기
    '매칭 정보', // 펜슬
  ]

  return (
    // MATE 정보, 프로필 변경은 흰색 헤더 사용
    <>
      {props.title === TwoHeaderNameList[7] ||
      props.title === TwoHeaderNameList[10] ? (
        <style.HeaderContainer IsBlack={false}>
          <style.ButtonContainer>
            <Ic_ArrowLeftWh onClick={() => navigate(-1)} />
          </style.ButtonContainer>

          <span>{props.title}</span>

          <style.ButtonContainer>{null}</style.ButtonContainer>
        </style.HeaderContainer>
      ) : (
        // 나머지는 검은색 헤더 사용
        <style.HeaderContainer IsBlack={true}>
          <style.ButtonContainer>
            <Ic_ArrowLeftBk onClick={() => navigate(-1)} />
          </style.ButtonContainer>

          <span>{props.title}</span>

          <style.ButtonContainer>
            {props.title === ThreeHeaderNameList[0] ? (
              // 자유 게시판 내 검색 기능
              <Ic_Search onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[1] ? (
              // 게시글 햄버거
              <Ic_More onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[2] ? (
              // 내가 쓴 글 내 검색 기능
              <Ic_Search onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[3] ? (
              // 댓글 단 글 내 검색 기능
              <Ic_Search onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[4] ? (
              // 스크랩한 글 내 검색 기능
              <Ic_Search onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[5] ? (
              // 봉사활동 페이지 내 검색 기능
              <Ic_Search onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[6] ? (
              // 동아리 및 소모임 페이지 내 검색 기능
              <Ic_Search onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[7] ? (
              // 스터디 페이지 내 검색 기능
              <Ic_Search onClick={() => navigate()} />
            ) : props.title === ThreeHeaderNameList[8] ? (
              // 매칭 정보 변경 버튼
              <Ic_Pencil onClick={() => navigate()} />
            ) : null}
          </style.ButtonContainer>
        </style.HeaderContainer>
      )}
    </>
  )
}
