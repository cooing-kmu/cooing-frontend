import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vector from '../assets/vector-right-black.svg'

export const ItemContainer = styled.div`
  color: white;
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.1),
    0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  text-align: left;
  text-decoration: none;
  padding: 20px 26px;
  margin: 20px 20px;
`
const InfoListSection = ({ item, itemType }) => {
  // 아이템 유형에 따라 다른 방식으로 렌더링
  const renderItem = () => {
    switch (itemType) {
      case 'policy':
        return (
          <>
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
                justifyContent: 'space-between',
              }}
            >
              {item.polyBizSjnm} <img src={vector} alt={vector} />
            </div>
            <div style={{ fontSize: 14 }}>{item.polytcnCn}</div>
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
