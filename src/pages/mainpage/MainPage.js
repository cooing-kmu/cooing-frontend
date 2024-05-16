import Footer from '../../components/footer/Footer'
import React from 'react'
import * as style from './Styles'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as CooingLogo } from '../../assets/cooingLogo.svg'
import { ReactComponent as Ic_Alarm } from '../../assets/icons/icon-alarm.svg'
import { ReactComponent as Ic_People } from '../../assets/icons/icon-people.svg'
import Image_EmptyBackGround from '../../assets/images/image-empty-background.png'

export default function MainPage() {
  const navigate = useNavigate()

  return (
    <style.MainContainer>
      메인 페이지 네비게이션 테스트
      <style.HeaderContainer>
        <style.ButtonContainer>
          <Ic_Alarm onClick={() => navigate('/alarm')} />
        </style.ButtonContainer>
        <style.CooingLogo>
          <CooingLogo />
        </style.CooingLogo>
        <style.ButtonContainer>
          <Ic_People onClick={() => navigate('/mate-info')} />
        </style.ButtonContainer>
      </style.HeaderContainer>
      {/*<img src={Image_EmptyBackGround} alt='빈 과자집' />*/}
      <Footer />
    </style.MainContainer>
  )
}
