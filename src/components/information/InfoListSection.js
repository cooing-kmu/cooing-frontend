import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vector from '../../assets/vector-right-black.svg'
import locationIcon from '../../assets/icon-location.svg'
import { useRecoilState } from 'recoil'
import { hasInfoScrapState } from '../../utils/userAtom'

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
function truncateText(text, maxLength = 20, replacement = '...') {
  if (text?.length <= maxLength) {
    return text
  } else {
    return text?.slice(0, maxLength) + replacement
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
        <img src={vector} alt='vector' />
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 14,
          fontWeight: 'bold',
          justifyContent: 'space-between',
        }}
      >
        {truncateText(itemContent, 15)}
        {hiringContent && (
          <div>
            <img
              src={locationIcon}
              alt='locationIcon'
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
  const [hasInfoScrap, setHasInfoScrap] = useRecoilState(hasInfoScrapState)

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
      case 'job':
        console.log(item.recrutSeNm)
        return (
          <InfoItem
            itemTitle={item.recrutPbancTtl}
            itemContent={truncateText(item.instNm, 8)}
            hiringContent={`${truncateText(item.workRgnNmLst, 2, ' 외')} | ${item.recrutSeNm} ${truncateText(item.acbgCondNmLst, 4, ' 외')}`}
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
          onClick={() => {
            setHasInfoScrap(item.isScraped)
          }}
        >
          {renderItem()}
        </Link>
      </ItemContainer>
    </div>
  )
}

export default InfoListSection
