import React, { useState } from 'react'
import {
  MainContainer,
  InfoContainer,
} from '../../components/information/BgComponent'
import BusinessData from '../../data/BusinessData'
import InfoListSection from '../../components/information/InfoListSection'
import searchIcon from '../../assets/search-icon.svg'
import Header from '../../components/header/Header'
import { DOMAIN_NAME } from '../../App'
import SearchComponent from '../../components/information/SearchComponent'

export default function Business() {
  const apiUrl = `${DOMAIN_NAME}/support/business`
  const categories = ['전체', '경제', '주거', '진로', '건강', '법률', '기타']
  const years = ['전체', '2024', '2023']
  return (
    <MainContainer>
      <Header title={'지원사업'} />
      <InfoContainer style={{ overflowY: 'hidden' }}>
        <SearchComponent
          apiUrl={apiUrl}
          itemType='business'
          categoryName1='분야'
          category1={categories}
          categoryName2='등록년도'
          category2={years}
        />
      </InfoContainer>
    </MainContainer>
  )
}
