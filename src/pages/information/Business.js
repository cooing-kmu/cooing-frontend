import React, { useState } from 'react'
import { MainContainer, InfoContainer } from '../../components/BgComponent'
import BusinessData from '../../data/BusinessData'
import InfoListSection from '../../components/./InfoListSection'
import searchIcon from '../../assets/search-icon.svg'
import Header from '../../components/header/Header'

export default function Business() {
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

  const filteredBusinessData = BusinessData.filter((business) => {
    if (selectedCategory === '전체' && selectedRegion === '전국') {
      return business.title.toLowerCase().includes(searchTerm.toLowerCase())
    } else if (selectedCategory === '전체' && selectedRegion !== '전국') {
      return (
        business.location === selectedRegion &&
        business.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else if (selectedCategory !== '전체' && selectedRegion === '전국') {
      return (
        business.category === selectedCategory &&
        business.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else {
      return (
        business.category === selectedCategory &&
        business.location === selectedRegion &&
        business.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  })
  return (
    <MainContainer>
      <Header title={'지원사업'} />
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
            <span style={{ marginRight: 20 }}>분야</span>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{
                marginRight: 16,
                fontSize: 20,
                borderRadius: '4px',
                backgroundColor: 'white',
                border: 'gray 1px solid',
                padding: '8px 10px',
              }}
            >
              <option>전체</option>
              <option>경제</option>
              <option>주거</option>
              <option>진로</option>
              <option>건강</option>
              <option>법률</option>
              <option>기타</option>
            </select>
            <span style={{ marginRight: 20 }}>등록년도</span>
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
              <option>전체</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
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
            <img src={searchIcon} alt={searchIcon} />
          </div>
        </div>{' '}
        {filteredBusinessData.length === 0 ? (
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
          filteredBusinessData.map((business) => (
            <InfoListSection
              key={business.id}
              item={business}
              itemType='business'
            />
          ))
        )}
      </InfoContainer>
    </MainContainer>
  )
}
