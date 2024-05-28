import React, { useEffect, useState } from 'react'
import {
  MainContainer,
  InfoContainer,
  ScrollContainer,
} from '../../components/BgComponent'
import InfoListSection from '../../components/./InfoListSection'
import searchIcon from '../../assets/search-icon.svg'
import Header from '../../components/header/Header'
import { DOMAIN_NAME } from '../../App'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Policy() {
  //검색 필터링
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  const [filteredPolicyData, setFilteredPolicyData] = useState([])

  //무한 스크롤
  const [scrollData, setScrollData] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

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

  //API 호출
  const fetchData = () => {
    let apiUrl = `${DOMAIN_NAME}/support/policy?`
    //api 주소에 검색 필터링 반영
    let queryParams = []

    if (selectedCategory.length > 0) {
      queryParams.push(`polyRlmCd=${selectedCategory}`)
    }
    if (selectedRegion.length > 0) {
      queryParams.push(`supportLocationType=${selectedRegion}`)
    }
    if (searchTerm.length > 0) {
      queryParams.push(`query=${searchTerm}`)
    }

    if (queryParams.length > 0) {
      apiUrl += `&${queryParams.join('&')}`
    }

    console.log(scrollData)
    console.log(apiUrl)

    //이전 검색 데이터 초기화
    setScrollData([])

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFilteredPolicyData(data.body)
        setScrollData(data.body.slice(0, 10))
        setPage(1)
        console.log(scrollData)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setHasMore(false)
      })
  }

  //스크롤 1회마다 보여줄 데이터 추가
  const fetchMoreData = () => {
    if (scrollData.length < filteredPolicyData.length) {
      setTimeout(() => {
        const newData = filteredPolicyData.slice(page * 10, (page + 1) * 10)
        setScrollData(scrollData.concat(newData))
        setPage((prevPage) => prevPage + 1)
        //console.log(`스크롤 후 ${page}`)
      }, 1000)
    } else {
      setHasMore(false)
    }
  }

  useEffect(() => {
    setPage(1)
    fetchData()
    //console.log(`검색 후 ${page}`)
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

        <ScrollContainer id='parentScrollDiv'>
          <InfiniteScroll
            dataLength={scrollData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>모든 데이터를 불러왔습니다.</p>} //테스트할 때만 띄울 메세지
            scrollableTarget='parentScrollDiv'
          >
            {filteredPolicyData && filteredPolicyData.length > 0 ? (
              scrollData.map((policy) => (
                <InfoListSection
                  key={policy.id}
                  item={policy}
                  itemType='policy'
                />
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
          </InfiniteScroll>
        </ScrollContainer>
      </InfoContainer>
    </MainContainer>
  )
}
