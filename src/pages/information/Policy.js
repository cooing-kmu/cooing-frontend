import React from 'react'
import { MainContainer, InfoContainer } from '../../components/BgComponent'
import policyData from '../../data/PolicyData'
import InfoListSection from '../../components/./InfoListSection'

export default function Policy() {
  return (
    <MainContainer>
      <div className='scrap-head'>지원정책</div>
      <InfoContainer>
        <div className='search'>
          <div
            className='search-category'
            style={{
              display: 'block',
              margin: 20,
              fontSize: 25,
              fontWeight: 'bold',
            }}
          >
            <span style={{ marginRight: 20 }}>분야</span>
            <select style={{ marginRight: 30, height: 35, fontSize: 20 }}>
              <option>일자리</option>
              <option>주거</option>
              <option>교육</option>
              <option>복지.문화</option>
              <option>참여.권리</option>
            </select>
            <span style={{ marginRight: 20 }}>지역</span>
            <select style={{ height: 35, fontSize: 20, width: 70 }}>
              <option>전국</option>
              <option>서울</option>
              <option>부산</option>
              <option>대구</option>
              <option>인천</option>
              <option>광주</option>
              <option>대전</option>
              <option>울산</option>
              <option>경기</option>
              <option>강원</option>
              <option>충북</option>
              <option>충남</option>
              <option>전북</option>
              <option>전남</option>
              <option>경북</option>
              <option>경남</option>
              <option>제주</option>
              <option>세종</option>
            </select>
          </div>

          <div className='search-category'>
            <input style={{ width: '80%', fontSize: '20px' }} />
          </div>
        </div>{' '}
        {policyData.map((policy) => (
          <InfoListSection item={policy} itemType='policy' />
        ))}
      </InfoContainer>
    </MainContainer>
  )
}
