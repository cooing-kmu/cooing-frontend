import React from 'react'
import InfoSection from '../../components/information/InfoSection'
import infoIcon1 from '../../assets/infoIcon1.svg'
import infoIcon2 from '../../assets/infoIcon2.svg'
import infoIcon3 from '../../assets/infoIcon3.svg'
import {
  MainContainer,
  LogoContainer,
} from '../../components/information/BgComponent'
import cooingLogo from '../../assets/cooingLogo.svg'

export default function Info() {
  return (
    <MainContainer>
      <LogoContainer>
        <img src={cooingLogo} alt='로고' width='150px' height='73px' />
      </LogoContainer>
      <div>
        <InfoSection
          title='지원정책'
          detailLink='/policy'
          scrapLink='/policy/scraplist'
          bgColor='#F7E4D2'
          detailColor='#FC5C4C'
          scrapColor='#FD814A'
          icon={infoIcon1}
        />
        <InfoSection
          title='지원사업'
          detailLink='/business'
          scrapLink='/business/scraplist'
          bgColor='#90CC8A73'
          detailColor='#20C777'
          scrapColor='#187D71'
          icon={infoIcon2}
        />
        <InfoSection
          title='채용공고'
          detailLink='/hiring'
          scrapLink='/hiring/scraplist'
          bgColor='#94BCFF73'
          detailColor='#3469A8'
          scrapColor='#5B46D9'
          icon={infoIcon3}
        />
      </div>
    </MainContainer>
  )
}
