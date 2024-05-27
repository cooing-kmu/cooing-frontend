import React, { useEffect, useState } from 'react'
import { MainContainer, InfoContainer } from '../../components/BgComponent'
import InfoListSection from '../../components/./InfoListSection'
import searchIcon from '../../assets/search-icon.svg'
import Header from '../../components/header/Header'
import { DOMAIN_NAME } from '../../App'

export default function Policy() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [filteredPolicyData, setFilteredPolicyData] = useState([])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleCategoryChange = (event) => {
    if (event.target.value === '전체') {
      setSelectedCategory('')
    } else setSelectedCategory(event.target.value)
  }

  const handleRegionChange = (event) => {
    if (event.target.value === '전국') {
      setSelectedRegion('')
    } else setSelectedRegion(event.target.value)
  }

  useEffect(() => {
    const fetchPolicyData = async () => {
      try {
        let apiUrl = `${DOMAIN_NAME}/support/policy?`
        let queryParams = []

        if (searchTerm.length > 0) {
          queryParams.push(`query=${searchTerm}`)
        }
        if (selectedCategory.length > 0) {
          queryParams.push(`polyRlmCd=${selectedCategory}`)
        }
        if (selectedRegion.length > 0) {
          queryParams.push(`supportLocationType=${selectedRegion}`)
        }

        if (queryParams.length > 0) {
          apiUrl += `&${queryParams.join('&')}`
        }

        const response = await fetch(apiUrl)
        const data = await response.json()

        setFilteredPolicyData((prevData) => [...prevData, ...data.body])
      } catch (error) {
        console.error('Error fetching policy data:', error)
      }
    }

    fetchPolicyData()
  }, [searchTerm, selectedCategory, selectedRegion])

  return (
    <MainContainer>
      <Header title={'지원정책'} />
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
                marginRight: 30,
                fontSize: 20,
                borderRadius: '4px',
                backgroundColor: 'white',
                border: 'gray 1px solid',
                padding: '8px 11px',
              }}
            >
              <option>전체</option>
              <option>일자리</option>
              <option>주거</option>
              <option>교육</option>
              <option>복지.문화</option>
              <option>참여.권리</option>
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
            <img
              src={`${searchIcon}`}
              alt='searchIcon'
              style={{ padding: 0 }}
            />
          </div>
        </div>
        {filteredPolicyData && filteredPolicyData.length > 0 ? (
          filteredPolicyData.map((policy) => (
            <InfoListSection key={policy.id} item={policy} itemType='policy' />
          ))
        ) : (
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
        )}
      </InfoContainer>
    </MainContainer>
  )
}
