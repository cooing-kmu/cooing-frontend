import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vector from '../../assets/vector-right-black.svg'
import locationIcon from '../../assets/icon-location.svg'

export const ItemContainer = styled.div`
  color: white;
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.1),
    0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  text-align: left;
  text-decoration: none;
  padding: 20px 26px;
  margin: 0 20px 20px 20px;
`
function truncateText(text, maxLength = 20) {
  if (text?.length <= maxLength) {
    return text
  } else {
    return text?.slice(0, maxLength) + '...'
  }
}

export const InfoItem = ({ itemTitle, itemContent, hiringContent }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
          justifyContent: 'space-between',
        }}
      >
        {truncateText(itemTitle)}
        <img src={vector} alt={vector} />
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 14,
          fontWeight: 'bold',
          justifyContent: 'space-between',
        }}
      >
        {truncateText(itemContent)}
        {hiringContent && (
          <div>
            <img
              src={locationIcon}
              alt={locationIcon}
              style={{ transform: 'translate(0, 20%)' }}
            />{' '}
            {hiringContent}
          </div>
        )}
      </div>
    </div>
  )
}

const InfoListSection = ({ item, itemType }) => {
  // 아이템 유형에 따라 다른 방식으로 렌더링
  const renderItem = () => {
    switch (itemType) {
      case 'policy':
        return (
          <InfoItem
            itemTitle={item.polyBizSjnm}
            itemContent={item.polyItcnCn}
          />
        )
      case 'business':
        return <InfoItem itemTitle={item.title} itemContent={item.category} />
      case 'hiring':
        return (
          <InfoItem
            itemTitle={item.recrutPbancTtl}
            itemContent={item.instNm}
            hiringContent={`${item.workRgnNmLst} | ${item.recrutSeNm} ${item.acbgCondNmLst}`}
          />
        )
    }
  }

  return (
    <div>
      <ItemContainer>
        <Link
          to={`/${itemType}/${item.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          {renderItem()}
        </Link>
      </ItemContainer>
    </div>
  )
}

export default InfoListSection
