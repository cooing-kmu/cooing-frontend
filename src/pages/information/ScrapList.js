import React, { useEffect, useState } from 'react'
import './ScrapList.css'
import { InfoContainer, MainContainer } from '../../components/BgComponent'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import { DOMAIN_NAME } from '../../App'
import InfoListSection from '../../components/InfoListSection'
import PolicyData from '../../data/PolicyData'

export default function ScrapList() {
  const { itemType } = useParams()
  console.log({ itemType })
  const [scrapList, setScrapList] = useState([]) // 스크랩 목록 상태 관리

  console.log(scrapList)
  useEffect(() => {
    setScrapList(PolicyData)
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

  let headerTitle = ''
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
