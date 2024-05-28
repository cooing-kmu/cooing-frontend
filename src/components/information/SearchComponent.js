// components/SearchableList.js
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import InfoListSection from './InfoListSection'
import searchIcon from '../../assets/search-icon.svg'
import { ScrollContainer } from './BgComponent'

const SearchComponent = ({
  itemType,
  apiUrl,
  category1,
  category2,
  categoryName1,
  categoryName2,
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory1, setSelectedCategory1] = useState('')
  const [selectedCategory2, setSelectedCategory2] = useState('')

  const [filteredData, setFilteredData] = useState([])

  const [scrollData, setScrollData] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleCategory1Change = (event) => {
    if (event.target.value === category1[0]) {
      setSelectedCategory1('')
    } else setSelectedCategory1(event.target.value)
  }

  const handleCategory2Change = (event) => {
    if (event.target.value === category2[0]) {
      setSelectedCategory2('')
    } else setSelectedCategory2(event.target.value)
  }

  const fetchData = () => {
    let fullApiUrl = `${apiUrl}?`
    let queryParams = []

    if (selectedCategory1.length > 0) {
      if (itemType === 'policy') {
        queryParams.push(`polyRlmCd=${selectedCategory1}`)
      } else if (itemType === 'business') {
        queryParams.push(`${categoryName1}=${selectedCategory1}`)
      } else if (itemType === 'hiring') {
        queryParams.push(`${categoryName1}=${selectedCategory1}`)
      }
    }
    if (selectedCategory2.length > 0) {
      if (itemType === 'policy') {
        queryParams.push(`supportLocationType=${selectedCategory2}`)
      } else if (itemType === 'business') {
        queryParams.push(`${categoryName1}=${selectedCategory2}`)
      } else if (itemType === 'hiring') {
        queryParams.push(`${categoryName1}=${selectedCategory2}`)
      }
    }
    if (searchTerm.length > 0) {
      queryParams.push(`query=${searchTerm}`)
    }

    if (queryParams.length > 0) {
      fullApiUrl += `${queryParams.join('&')}`
    }

    setScrollData([])
    setFilteredData([])
    console.log(fullApiUrl)

    fetch(fullApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFilteredData(data.body)
        setScrollData(data.body.slice(0, 10))
        setPage(1)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setHasMore(false)
      })
  }

  //스크롤 1회마다 보여줄 데이터 추가
  const fetchMoreData = () => {
    if (scrollData.length < filteredData.length) {
      setTimeout(() => {
        const newData = filteredData.slice(page * 10, (page + 1) * 10)
        setScrollData(scrollData.concat(newData))
        setPage((prevPage) => prevPage + 1)
      }, 1200)
    } else {
      setHasMore(false)
    }
  }

  useEffect(() => {
    setPage(1)
    fetchData()
  }, [searchTerm, selectedCategory1, selectedCategory2])

  return (
    <div>
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
          <span style={{ marginRight: 20 }}>{categoryName1}</span>
          <select
            value={selectedCategory1}
            onChange={handleCategory1Change}
            style={{
              marginRight: 30,
              fontSize: 20,
              borderRadius: '4px',
              backgroundColor: 'white',
              border: 'gray 1px solid',
              padding: '8px 11px',
            }}
          >
            {category1.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <span style={{ marginRight: 20 }}>{categoryName2}</span>
          <select
            value={selectedCategory2}
            onChange={handleCategory2Change}
            style={{
              fontSize: 20,
              borderRadius: '4px',
              backgroundColor: 'white',
              border: 'gray 1px solid',
              padding: '8px 11px',
            }}
          >
            {category2.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
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
          <img src={`${searchIcon}`} alt='searchIcon' style={{ padding: 0 }} />
        </div>
      </div>
      {filteredData && filteredData.length > 0 ? (
        <ScrollContainer id='scrollDiv'>
          <InfiniteScroll
            dataLength={scrollData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget='scrollDiv'
            endMessage='모든 데이터를 불러왔습니다.'
          >
            {scrollData.map((item) => (
              <InfoListSection key={item.id} item={item} itemType={itemType} />
            ))}
          </InfiniteScroll>
        </ScrollContainer>
      ) : (
        <div
          className='no-results'
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
    </div>
  )
}

export default SearchComponent
