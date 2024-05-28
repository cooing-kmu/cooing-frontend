import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function SignUp() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }))
  const [hasMore, setHasMore] = useState(true)
  const fetchMoreData = async () => {
    if (dataSource.length < 100) {
      //가져온 데이터 갯수만큼
      //API
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 10 })))
      }, 900)
    } else {
      setHasMore(false)
    }
  }
  return (
    <div style={{ padding: '30px' }}>
      <p>
        <b>dfasfdds</b>
      </p>
      <div id='parentScrollDiv' style={{ height: 400, overflow: 'auto' }}>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>You are all set!</p>}
          scrollableTarget='parentScrollDiv'
        >
          {dataSource.map((item, index) => {
            return <div> This is a div # {index + 1}</div>
          })}
        </InfiniteScroll>
      </div>
    </div>
  )
}
