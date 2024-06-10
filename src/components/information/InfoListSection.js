import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import vector from '../../assets/vector-right-black.svg'
import locationIcon from '../../assets/icon-location.svg'
import { useRecoilState } from 'recoil'
import { hasInfoScrapState } from '../../Atom'

export const ItemContainer = styled.div`
  color: black;
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.1),
    0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  text-align: left;
  text-decoration: none;
  padding: 20px 26px;
  margin: 0 20px 20px 20px;
  ${(props) =>
    props.isSelected &&
    css`
      box-shadow:
        0 2px 10px 0 rgba(252, 92, 76, 0.5),
        0 6px 10px 0 rgba(252, 92, 76, 0.5);
    `}
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

const InfoListSection = ({
  item,
  itemType,
  isEditing,
  isSelected,
  onSelect,
}) => {
  const [hasInfoScrap, setHasInfoScrap] = useRecoilState(hasInfoScrapState)
  const navigate = useNavigate()

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

  const handleItemClick = () => {
    if (isEditing) {
      onSelect(item.id)
    } else {
      // 상세 페이지로 이동하는 로직을 여기에 추가합니다.
      setHasInfoScrap(item.isScraped)
      navigate(`/${itemType}/${item.id}`)
    }
  }

  return (
    <div>
      <ItemContainer isSelected={isSelected}>
        <div
          onClick={() => {
            handleItemClick()
          }}
        >
          {renderItem()}
        </div>
      </ItemContainer>
    </div>
  )
}

export default InfoListSection
