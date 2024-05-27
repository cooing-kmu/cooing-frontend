import * as style from './Styles'
import Header from '../../../components/header/Header'
import { ReactComponent as Ic_User } from '../../../assets/icons/icon-user.svg'
import InterestCard2 from '../../../components/card/InterestCard2'
import ThinkCard2 from '../../../components/card/ThinkCard2'
import { TextContainer } from './Styles'

export default function MateInfo() {
  const MateInterestKeyword = [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0]
  const MateThinkKeyword = [0, 1, 0, 0, 1, 0, 1, 1]

  return (
    <style.MainContainer>
      <style.BackgroundContainer>
        <Header title='MATE 정보' />
        <style.CircleContainer></style.CircleContainer>
        <style.ImageContainer>
          <Ic_User />
        </style.ImageContainer>
      </style.BackgroundContainer>
      <style.InfoContainer>
        <span>닉네임</span>
        <span>역할</span>
      </style.InfoContainer>
      <style.BioContainer>한줄소개</style.BioContainer>
      <style.TextContainer>관심 키워드</style.TextContainer>
      <InterestCard2
        layout={1}
        interestList={MateInterestKeyword}
        buttonName={null}
      />
      <style.TextContainer>고민 키워드</style.TextContainer>
      <ThinkCard2
        layout={1}
        interestList={MateThinkKeyword}
        buttonName={null}
      />
      <span
        style={{ marginBottom: '20px', color: '#a6a6a6', fontSize: '14px' }}
      >
        MATE 관리는 [마이페이지 - 매칭 기능 활성화] 이용
      </span>
    </style.MainContainer>
  )
}
