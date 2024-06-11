import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as style from './Styles'
import { ReactComponent as CooingLogo } from '../../assets/icons/icon-cooingLogo.svg'
import { ReactComponent as Ic_Matching } from '../../assets/icons/icon-matching.svg'
import { ReactComponent as Ic_CheckList } from '../../assets/icons/icon-checklist.svg'
import { ReactComponent as Ic_ArrowRight } from '../../assets/icons/icon-arrow-r.svg'
import { ReactComponent as Ic_User } from '../../assets/icons/icon-user.svg'
import { ReactComponent as Ic_Info } from '../../assets/icons/icon-infomation.svg'
import { useNavigate } from 'react-router-dom'
import { DOMAIN_NAME } from '../../App'

const ToggleSlider = ({ $isActive }) => (
  <style.ToggleSlider $isActive={$isActive} />
)

export default function MyPage() {
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [profileImageUrl, setProfileImageUrl] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [])

  const handleToggle = async () => {
    if (user) {
      const newIsActive = !user.isMatchingActive

      try {
        const response = await axios.put(
          `${DOMAIN_NAME}/user/status`,
          {
            isMatchingActive: newIsActive,
          },
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
        )

        await getUserInfo()

        // 사용자 정보 업데이트
        setUser((prevUser) => ({
          ...prevUser,
          isMatchingActive: newIsActive,
        }))

        // 만약 매칭이 활성화되면, 1초 후에 '/set-interest-keyword'로 네비게이션
        if (newIsActive) {
          setTimeout(() => {
            navigate('/set-interest-keyword')
          }, 1000)
        }

        // 만약 매칭이 비활성화되면 관련 정보를 백엔드에 전송
        if (!newIsActive) {
          const interestKeyword = Array(16).fill(0)
          const concernKeyword = Array(8).fill(0)

          await axios.put(
            `${DOMAIN_NAME}/user/keyword`,
            {
              interestKeyword,
              concernKeyword,
            },
            {
              headers: {
                Authorization: window.localStorage.getItem('Authorization'),
              },
            }
          )
        }
      } catch (err) {
        console.error('Error updating matching status', err)
      }
    }
  }

  const getUserInfo = async () => {
    try {
      const userInfo = await axios
        .get(`${DOMAIN_NAME}/user`, {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        })
        .then((res) => {
          const _user = res.data.body
          setUser({ ..._user })
          setName(_user.username)
          setRole(_user.roleType)
          setProfileImageUrl(_user.profileImageUrl)
          setIsActive(_user.isMatchingActive)
          console.log(_user)
          return _user
        })
      return userInfo
    } catch (err) {
      console.log(err)
    }
  }

  const logout = async () => {
    try {
      await axios.get(`${DOMAIN_NAME}/signout`, {
        headers: {
          Authorization: window.localStorage.getItem('Authorization'),
        },
      })

      // 로컬 스토리지 초기화
      window.localStorage.removeItem('Authorization')

      // 로그인 페이지로 이동
      navigate('/')
    } catch (err) {
      console.log('로그아웃 중 에러 발생:', err)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <style.MainContainer>
      <style.CooingLogo>
        <CooingLogo />
      </style.CooingLogo>

      <style.MenuContainer>
        <style.ProfileContainer>
          <style.ImageContainer>
            {profileImageUrl ? (
              <style.ProfileImage src={profileImageUrl} alt='Profile' />
            ) : (
              <Ic_User />
            )}
          </style.ImageContainer>
          <style.NameTextContainer>{name}</style.NameTextContainer>
          <style.RoleTextContainer>{role}</style.RoleTextContainer>
          <style.RightContainer>
            <style.ButtonContainer>
              <Ic_ArrowRight onClick={() => navigate('/profile')} />
            </style.ButtonContainer>
          </style.RightContainer>
        </style.ProfileContainer>

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
              <ToggleSlider $isActive={isActive} />
            </style.ToggleSwitch>
          </style.RightContainer>
        </style.InnerContainer>
        {isActive && (
          <style.InnerContainer>
            <Ic_Info />
            매칭 정보
            <style.RightContainer>
              <style.ButtonContainer>
                <Ic_ArrowRight onClick={() => navigate('/interest-info')} />
              </style.ButtonContainer>
            </style.RightContainer>
          </style.InnerContainer>
        )}
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

      <style.ButtonContainer>
        <style.LogoutTextContainer onClick={logout}>
          로그아웃
        </style.LogoutTextContainer>
      </style.ButtonContainer>
    </style.MainContainer>
  )
}
