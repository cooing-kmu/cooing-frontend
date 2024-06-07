import React, { useEffect, useState } from 'react'
import './ScrapList.css'
import {
  InfoContainer,
  MainContainer,
  ScrollContainer,
} from '../../components/information/BgComponent'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import { DOMAIN_NAME } from '../../App'
import InfoListSection from '../../components/information/InfoListSection'
import axios from 'axios'

export default function ScrapList() {
  const { itemType } = useParams()
  console.log({ itemType })
  const [scrapList, setScrapList] = useState([]) // 스크랩 목록 상태 관리
  let headerTitle = ''
  useEffect(() => {
    axios
      .get(`${DOMAIN_NAME}/support/${itemType}?scrap=true`, {
        headers: {
          Authorization: window.localStorage.getItem('Authorization'),
        },
      })
      .then((res) => {
        setScrapList(res.data.body)
        console.log(`${DOMAIN_NAME}/support/${itemType}?scrap=false`)
        console.log(res.data.body)
      })
    //   // itemType에 따라 API 호출하여 스크랩 목록 데이터 가져오기
    //   const fetchScrapList = async () => {
    //     try {
    //       const response = await fetch(`${DOMAIN_NAME}/${itemType}/scrapList`)
    //       const data = await response.json()
    //       setScrapList(data)
    //     } catch (error) {
    //       console.error('Error fetching scrap list:', error)
    //     }
    //   }
    //   fetchScrapList()
  }, [itemType])
  switch (itemType) {
    case 'policy':
      headerTitle = '지원정책 스크랩 목록'
      break
    case 'business':
      headerTitle = '지원사업 스크랩 목록'
      break
    case 'job':
      headerTitle = '채용공고 스크랩 목록'
      break
  }
  console.log(scrapList)
  return (
    <MainContainer>
      <Header title={headerTitle} />
      <InfoContainer>
        {scrapList && scrapList.length > 0 ? (
          scrapList.map((item) => (
            <InfoListSection key={item.id} itemType={itemType} item={item} />
          ))
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
            스크랩 데이터가 없습니다.
          </div>
        )}
      </InfoContainer>
    </MainContainer>
  )
}
