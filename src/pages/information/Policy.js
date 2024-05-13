import React from 'react'
import './ScrapList.css'
import { MainContainer, InfoContainer } from '../../components/BgComponent'
import policyData from '../../data/PolicyData'
import InfoListSection from '../../components/./InfoListSection'

export default function Policy() {
  return (
    <MainContainer>
      <div className='scrap-head'>지원정책</div>
      <InfoContainer>
        {' '}
        {policyData.map((policy) => (
          <InfoListSection item={policy} itemType='policy' />
        ))}
      </InfoContainer>
    </MainContainer>
  )
}
