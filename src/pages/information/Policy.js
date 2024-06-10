import React from 'react'
import {
  MainContainer,
  InfoContainer,
} from '../../components/information/BgComponent'
import Header from '../../components/header/Header'
import { DOMAIN_NAME } from '../../App'
import SearchComponent from '../../components/information/SearchComponent'

export default function Policy() {
  const apiUrl = `${DOMAIN_NAME}/support/policy`
  const categories = [
    '전체',
    '일자리',
    '주거',
    '교육',
    '복지.문화',
    '참여.권리',
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
      <Header title={'지원정책'} />
      <InfoContainer style={{ overflowY: 'hidden' }}>
        <SearchComponent
          apiUrl={apiUrl}
          itemType='policy'
          categoryName1='분야'
          category1={categories}
          categoryName2='지역'
          category2={regions}
        />
      </InfoContainer>
    </MainContainer>
  )
}
