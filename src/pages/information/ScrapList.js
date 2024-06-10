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
  const [isEditing, setIsEditing] = useState(false) // 수정 상태 관리
  const [selectedItems, setSelectedItems] = useState([]) // 선택된 아이템 상태 관리
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

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
    setSelectedItems([])
  }

  const handleItemSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedItems.map((id) =>
          axios.delete(`${DOMAIN_NAME}/support/${itemType}/${id}/scrap`, {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          })
        )
      )

      // 로컬 상태에서 삭제
      const updatedList = scrapList.filter(
        (item) => !selectedItems.includes(item.id)
      )
      setScrapList(updatedList)
      setSelectedItems([])
      setIsEditing(false)

      console.log('삭제 성공')
    } catch (error) {
      console.error('삭제 실패', error)
    }
  }

  console.log(scrapList)
  return (
    <MainContainer>
      <Header title={headerTitle} />
      <InfoContainer>
        <div>
          <button onClick={handleEditToggle}>
            {isEditing ? '취소' : '수정'}
          </button>
          {isEditing && (
            <button
              onClick={handleDelete}
              disabled={selectedItems.length === 0}
            >
              삭제
            </button>
          )}
        </div>
        {scrapList && scrapList.length > 0 ? (
          scrapList.map((item) => (
            <InfoListSection
              key={item.id}
              itemType={itemType}
              item={item}
              isEditing={isEditing}
              isSelected={selectedItems.includes(item.id)}
              onSelect={handleItemSelect}
            />
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
