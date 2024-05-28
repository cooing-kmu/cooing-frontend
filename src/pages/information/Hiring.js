import React from 'react'
import {
  MainContainer,
  InfoContainer,
} from '../../components/information/BgComponent'
import Header from '../../components/header/Header'
import { DOMAIN_NAME } from '../../App'
import SearchComponent from '../../components/information/SearchComponent'

export default function Hiring() {
  const apiUrl = `${DOMAIN_NAME}/support/job`
  const categories = [
    '전체',
    '사업관리',
    '경영.회계.사무',
    '금융.보험',
    '교육.자연.사회과학',
    '법률.경찰.소방.교도.국방',
    '보건.의료',
    '사회복지.종교',
    '문화.예술.디자인.방송',
    '운전.운송',
    '영업판매',
    '경비.청소',
    '이용.숙박.여행.오락.스포츠',
    '음식서비스',
    '건설',
    '기계',
    '재료',
    '화학',
    '섬유.의복',
    '전기.전자',
    '정보통신',
    '식품가공',
    '인쇄.목재.가구.공예',
    '환경.에너지.안전',
    '농림어업',
    '연구',
  ]
  const regions = [
    '전국',
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
    '세종',
  ]

  return (
    <MainContainer>
      <Header title={'채용공고'} />
      <InfoContainer style={{ overflowY: 'hidden' }}>
        <SearchComponent
          apiUrl={apiUrl}
          itemType='hiring'
          categoryName1='직업'
          category1={categories}
          categoryName2='지역'
          category2={regions}
        />
      </InfoContainer>
    </MainContainer>
  )
}
