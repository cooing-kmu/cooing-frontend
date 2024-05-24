import React, { useState } from 'react'
import { MainContainer, InfoContainer } from '../../components/BgComponent'
import InfoListSection from '../../components/./InfoListSection'
import searchIcon from '../../assets/search-icon.svg'
import Header from '../../components/header/Header'
import HiringData from '../../data/HiringData'

export default function Hiring() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [selectedRegion, setSelectedRegion] = useState('전국')

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value)
  }

  const filteredHiringData = HiringData.filter((hiring) => {
    if (selectedCategory === '전체' && selectedRegion === '전국') {
      return (
        hiring.recrutPbancTtl
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        hiring.instNm.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else if (selectedCategory === '전체' && selectedRegion !== '전국') {
      return (
        hiring.workRgnNmLst === selectedRegion &&
        (hiring.recrutPbancTtl
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
          hiring.instNm.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    } else if (selectedCategory !== '전체' && selectedRegion === '전국') {
      return (
        hiring.ncsCdNmLst === selectedCategory &&
        (hiring.recrutPbancTtl
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
          hiring.instNm.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    } else {
      return (
        hiring.ncsCdNmLst === selectedCategory &&
        hiring.workRgnNmLst === selectedRegion &&
        (hiring.recrutPbancTtl
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
          hiring.instNm.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
  })

  return (
    <MainContainer>
      <Header title={'채용공고'} />
      <InfoContainer>
        <div className='search'>
          <div
            className='search-category'
            style={{
              margin: 20,
              fontSize: 25,
              fontWeight: 'bold',
              alignContent: 'center',
            }}
          >
            <span style={{ marginRight: 20 }}>직업</span>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{
                marginRight: 20,
                fontSize: 20,
                borderRadius: '4px',
                backgroundColor: 'white',
                border: 'gray 1px solid',
                padding: '8px 11px',
                width: '130px',
              }}
            >
              <option>전체</option>
              <option>사업관리</option>
              <option>경영.회계.사무</option>
              <option>금융.보험</option>
              <option>교육.자연.사회과학</option>
              <option>법률.경찰.소방.교도.국방</option>
              <option>보건.의료</option>
              <option>사회복지.종교</option>
              <option>문화.예술.디자인.방송</option>
              <option>운전.운송</option>
              <option>영업판매</option>
              <option>경비.청소</option>
              <option>이용.숙박.여행.오락.스포츠</option>
              <option>음식서비스</option>
              <option>건설</option>
              <option>기계</option>
              <option>재료</option>
              <option>화학</option>
              <option>섬유.의복</option>
              <option>전기.전자</option>
              <option>정보통신</option>
              <option>식품가공</option>
              <option>인쇄.목재.가구.공예</option>
              <option>환경.에너지.안전</option>
              <option>농림어업</option>
              <option>연구</option>
            </select>
            <span style={{ marginRight: 20 }}>지역</span>
            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              style={{
                fontSize: 20,
                width: 90,
                borderRadius: '4px',
                backgroundColor: 'white',
                border: 'gray 1px solid',
                padding: '8px 11px',
              }}
            >
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

          <div
            className='search-category'
            style={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '10px',
              border: 'solid 1px gray',
              width: '90%',
              margin: 15,
              padding: '6px 7px',
            }}
          >
            <input
              type='text'
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder='검색어를 입력하세요'
              style={{
                width: '75%',
                fontSize: '20px',
                border: 'none',
                margin: '0 10px',
              }}
            />
            <img src={searchIcon} alt='searchIcon' />
          </div>
        </div>
        {filteredHiringData.length === 0 ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
              fontSize: '20px',
            }}
          >
            검색 결과가 없습니다.
          </div>
        ) : (
          filteredHiringData.map((hiring) => (
            <InfoListSection key={hiring.id} item={hiring} itemType='hiring' />
          ))
        )}
      </InfoContainer>
    </MainContainer>
  )
}
