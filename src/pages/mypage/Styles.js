import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffad0;
  height: 100vh;
  width: 100%;
`

export const CooingLogo = styled.div`
  display: flex;
  width: 150px;
  height: 73px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 15px;
`

export const MenuContainer = styled.div`
  display: flex;
  width: 376px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

export const InnerContainer = styled.div`
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  width: 346px;
  height: 56px;
  align-items: center;
  font-size: 16px;
  gap: 6px;
  justify-content: space-between;
  border-bottom: solid 1px #a6a6a6;
  &:last-child {
    border-bottom: none;
  }
`

export const ImageContainer = styled.div`
  width: 44px;
  height: 44px;
  overflow: hidden;
  border-radius: 50%; // 둥근 프로필 이미지로 만들기 위해 추가
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProfileContainer = styled.div`
  border-bottom: solid 1px #a6a6a6;
  display: flex;
  height: 80px;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  gap: 8px;
`

export const RightContainer = styled.div`
  margin-left: auto;
  margin-right: 10px;
`

export const ButtonContainer = styled.div`
  cursor: pointer;
`

export const NameTextContainer = styled.div`
  font-weight: bold;
  font-size: 22px;
`

export const RoleTextContainer = styled.div`
  font-weight: bold;
  color: #fd814a;
  font-size: 14px;
`

export const LogoutTextContainer = styled.div`
  cursor: pointer;
  font-weight: bold;
  color: #fd814a;
  font-size: 16px;
  margin-top: 20px;
  text-decoration-line: underline;
`

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 47px;
  height: 23px;
`

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #fc5c4c;

      &:before {
        transform: translateX(26px);
      }
    `}
`

export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: #fc5c4c;
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #a6a6a6;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
