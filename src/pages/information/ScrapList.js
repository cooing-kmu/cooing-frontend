import React, { useEffect, useState } from 'react'
import './ScrapList.css'
import {
  InfoContainer,
  MainContainer,
} from '../../components/information/BgComponent'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import { DOMAIN_NAME } from '../../App'
import InfoListSection from '../../components/information/InfoListSection'
import PolicyData from '../../data/PolicyData'
import BusinessData from '../../data/BusinessData'
import HiringData from '../../data/HiringData'

export default function ScrapList() {
  const { itemType } = useParams()
  console.log({ itemType })
  const [scrapList, setScrapList] = useState([]) // 스크랩 목록 상태 관리
  let headerTitle = ''
  useEffect(() => {
    switch (itemType) {
      case 'policy':
        setScrapList(PolicyData)
        break
      case 'business':
        setScrapList(BusinessData)
        break
      case 'hiring':
        setScrapList(HiringData)
        break
    }
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
    case 'hiring':
      headerTitle = '채용공고 스크랩 목록'
      break
  }
  console.log(scrapList)
  return (
    <MainContainer>
      <Header title={headerTitle} />
      <InfoContainer>
        {scrapList.map((item) => (
          <InfoListSection key={item.id} itemType={itemType} item={item} />
        ))}
      </InfoContainer>
    </MainContainer>
  )
}
