import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import * as style from './Styles'
import { ReactComponent as Ic_Candy } from '../../assets/icons/icon-candy.svg'
import { ReactComponent as Ic_Announcement } from '../../assets/icons/icon-announcement.svg'
import { ReactComponent as Ic_Community } from '../../assets/icons/icon-community.svg'
import { ReactComponent as Ic_Chatting } from '../../assets/icons/icon-chatting.svg'
import { ReactComponent as Ic_Profile } from '../../assets/icons/icon-profile.svg'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  // URL 경로에서 페이지 이름 추출
  const currentPage = location.pathname.substring(1)

  // 선택된 아이콘 상태를 유지합니다.
  const [selectedIcon, setSelectedIcon] = useState(currentPage || 'main-page')

  // 클릭 이벤트 핸들러
  const handleClick = (icon, page) => {
    setSelectedIcon(icon) // 선택된 아이콘 상태를 업데이트합니다.
    navigate(page) // 페이지를 이동합니다.
  }

  // 페이지 변경 시 선택된 아이콘 상태 업데이트
  useEffect(() => {
    setSelectedIcon(currentPage || 'main-page')
  }, [currentPage])
  if (
    //footer 없는 페이지
    location.pathname !== '/check-list' &&
    location.pathname !== '/mate-info' &&
    location.pathname !== '/alarm' &&
    location.pathname !== '/comment' &&
    location.pathname !== '/my-wrote' &&
    location.pathname !== '/scrap' &&
    location.pathname !== '/profile' &&
    location.pathname !== '/sign-in' &&
    location.pathname !== '/' &&
    location.pathname !== '/chatting/room' &&
    !location.pathname.includes('club') &&
    !location.pathname.includes('free-board') &&
    !location.pathname.includes('study') &&
    !location.pathname.includes('volunteer') &&
    !location.pathname.includes('sign-up') &&
    !location.pathname.includes('interest') && // policy가 들어간 링크에 안뜨게 하고 싶을 때
    !location.pathname.includes('think')&&
    !location.pathname.includes('user-info')
  ) {
    return (
      <style.FooterContainer>
        <style.IconContainer>
          <Link to='/info'>
            <Ic_Announcement
              onClick={() => handleClick('info', '/info')}
              fill={selectedIcon === 'info' ? '#fc5242' : '#484C52'}
            />
          </Link>
        </style.IconContainer>
        <style.IconContainer>
          <Link to='/community'>
            <Ic_Community
              onClick={() => handleClick('community', '/community')}
              fill={selectedIcon === 'community' ? '#fc5242' : '#484C52'}
            />
          </Link>
        </style.IconContainer>
        <style.ButtonContainer>
          <Link to='/main-page'>
            <Ic_Candy
              onClick={() => handleClick('candy', '/main-page')}
              fill={selectedIcon === 'candy' ? '#fc5242' : '#484C52'}
            />
          </Link>
        </style.ButtonContainer>
        <style.IconContainer>
          <Link to='/chatting'>
            <Ic_Chatting
              onClick={() => handleClick('chatting', '/chatting')}
              fill={selectedIcon === 'chatting' ? '#fc5242' : '#484C52'}
            />
          </Link>
        </style.IconContainer>
        <style.IconContainer>
          <Link to='/my-page'>
            <Ic_Profile
              onClick={() => handleClick('my-page', '/my-page')}
              fill={selectedIcon === 'my-page' ? '#fc5242' : '#484C52'}
            />
          </Link>
        </style.IconContainer>
      </style.FooterContainer>
    )
  } else {
    return null
  }
}
