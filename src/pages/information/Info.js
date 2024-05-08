import React from 'react'
import InfoSection from '../../components/InfoSection'
import './Info.css'
import infoIcon1 from '../../assets/infoIcon1.svg'
import infoIcon2 from '../../assets/infoIcon2.svg'
import infoIcon3 from '../../assets/infoIcon3.svg'
import { MainContainer } from '../../components/BgComponent'
import cooingLogo from '../../assets/cooingLogo.svg'

export default function Info() {
  return (
    <MainContainer>
      <div>
        <img src={cooingLogo} alt='로고' className='cooing-logo' />
        <InfoSection
          title='지원정책'
          detailLink='/policy'
          scrapLink='/scraplist'
          bgColor='#F7E4D2'
          detailColor='#FC5C4C'
          scrapColor='#FD814A'
          icon={infoIcon1}
        />
        <InfoSection
          title='지원정보'
          detailLink='/support-info-details'
          scrapLink='/scraplist'
          bgColor='#90CC8A73'
          detailColor='#20C777'
          scrapColor='#187D71'
          icon={infoIcon2}
        />
        <InfoSection
          title='채용공고'
          detailLink='/job-posting-details'
          scrapLink='/scraplist'
          bgColor='#94BCFF73'
          detailColor='#3469A8'
          scrapColor='#5B46D9'
          icon={infoIcon3}
        />
      </div>
    </MainContainer>
  )
}
