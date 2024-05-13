import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vector from '../assets/vector-right.svg'
import { InfoContainer } from './BgComponent'

export const ItemContainer = styled.div`
  color: white;
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.25),
    0 6px 10px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 40px;
  border-radius: 20px;
  text-align: left;
  text-decoration: none;
  padding: 3px 20px;
`
const InfoListSection = ({ item, itemType }) => {
  // 아이템 유형에 따라 다른 방식으로 렌더링
  const renderItem = () => {
    switch (itemType) {
      case 'policy':
        return (
          <>
            <h3>{item.polyBizSjnm}</h3>
            <p>{item.ploytcnCn}</p>
          </>
        )
      case 'business':
        return (
          <>
            <h3>{item.businessName}</h3>
            <p>{item.businessDescription}</p>
          </>
        )
      case 'information':
        return (
          <>
            <h3>{item.infoTitle}</h3>
            <p>{item.infoDescription}</p>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <ItemContainer>
        <Link to={`/${itemType}/${item.id}`}>{renderItem()}</Link>
      </ItemContainer>
    </div>
  )
}

export default InfoListSection
