import React, { useState } from 'react'
import * as style from './Styles'
import { ReactComponent as CooingLogo } from '../../assets/cooingLogo.svg'
import { ReactComponent as Ic_Matching } from '../../assets/icons/icon-matching.svg'
import { ReactComponent as Ic_CheckList } from '../../assets/icons/icon-checklist.svg'
import { ReactComponent as Ic_ArrowRight } from '../../assets/icons/icon-arrow-r.svg'
import { ReactComponent as Ic_User } from '../../assets/icons/icon-user.svg'
import { ReactComponent as Ic_Info } from '../../assets/icons/icon-infomation.svg'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

export default function MyPage() {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const showLogoutModal = () => {
    console.log('로그아웃 test')
    // 이곳에 페이지 이동 등의 작업을 추가할 수 있습니다.
  }

  const navigate = useNavigate()

  return (
    <style.MainContainer>
      {/* 로고 */}
      <style.CooingLogo>
        <CooingLogo />
      </style.CooingLogo>

      {/* 메뉴 */}
      <style.MenuContainer>
        {/* 프로필 */}
        <style.ProfileContainer>
          <style.ImageContainer>
            <Ic_User />
          </style.ImageContainer>
          <style.NameTextContainer>닉네임</style.NameTextContainer>
          <style.RoleTextContainer>역할</style.RoleTextContainer>
          <style.RightContainer>
            <style.ButtonContainer>
              <Ic_ArrowRight onClick={() => navigate('/profile')} />
            </style.ButtonContainer>
          </style.RightContainer>
        </style.ProfileContainer>
        <style.Line />

        {/* 매칭 기능 활성화 */}
        <style.InnerContainer>
          <Ic_Matching />
          매칭 기능 활성화
          <style.RightContainer>
            <style.ToggleSwitch>
              <style.CheckBox
                type='checkbox'
                checked={isActive}
                onChange={handleToggle}
              />
              <style.ToggleSlider isActive={isActive} />
            </style.ToggleSwitch>
          </style.RightContainer>
        </style.InnerContainer>

        {/* 매칭 기능 활성화 시 매칭 정보 노출 */}
        {isActive && <style.Line />}
        {isActive && (
          <style.InnerContainer>
            <Ic_Info />
            매칭 정보
            <style.RightContainer>
              <style.ButtonContainer>
                <Ic_ArrowRight onClick={() => navigate('/matching-info')} />
              </style.ButtonContainer>
            </style.RightContainer>
          </style.InnerContainer>
        )}

        <style.Line />

        {/* 자립 체크 리스트 */}
        <style.InnerContainer>
          <Ic_CheckList />
          자립 체크 리스트
          <style.RightContainer>
            <style.ButtonContainer>
              <Ic_ArrowRight onClick={() => navigate('/check-list')} />
            </style.ButtonContainer>
          </style.RightContainer>
        </style.InnerContainer>
      </style.MenuContainer>

      {/* 로그아웃 버튼 */}
      <style.ButtonContainer>
        <style.LogoutTextContainer onClick={showLogoutModal}>
          로그아웃
        </style.LogoutTextContainer>
      </style.ButtonContainer>
      <Footer />
    </style.MainContainer>
  )
}
