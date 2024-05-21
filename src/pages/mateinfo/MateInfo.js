import * as style from './Styles'
import Header from '../../components/header/Header'
import { ReactComponent as Ic_User } from '../../assets/icons/icon-user.svg'

export default function MateInfo() {
  return (
    <style.MainContainer>
      <style.BackgroundContainer>
        <Header title='MATE 정보' />
        <style.CircleContainer></style.CircleContainer>
        <style.ImageContainer>
          <Ic_User />
        </style.ImageContainer>
      </style.BackgroundContainer>
      <style.TextContainer>
        <span>닉네임</span>
        <span>역할</span>
      </style.TextContainer>
      <span>한줄소개</span>
    </style.MainContainer>
  )
}
