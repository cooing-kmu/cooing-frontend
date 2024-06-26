import React from 'react'
import styled from 'styled-components'
import cooingLogo from '../../assets/icons/icon-cooingLogo.svg'
import google from '../../assets/icons/icon-google.svg'
import house from '../../assets/images/image-cooinghouse.svg'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../Atom'
import { DOMAIN_NAME } from '../../App'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffad0;
  height: 100vh;
  gap: 60px;
  width: 100%;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  align-items: center;
  gap: 15px;
`

const TextContainer = styled.div`
  p,
  h4 {
    margin: 0;
  }
  p {
    margin-bottom: 5px;
  }
`

const CooingLogo = styled.img`
  width: 230px; /* 원하는 크기로 조절 */
`

const LoginButton = ({ signInSuccessUrl, signUpUrl, signInFailureUrl }) => {
  const host = `${DOMAIN_NAME}`
  const [user, setUser] = useRecoilState(userState)

  const clientId =
    '599467764330-imh8k96aer7kbghf1432dd4vjnj9814j.apps.googleusercontent.com'
  const navigate = useNavigate()

  const onSuccess = async (res) => {
    const googleToken = res.credential
    axios.defaults.withCredentials = true

    // google access token으로 서버에서 jwt 토큰 발급 => 토큰을 local storage에 저장
    const userToken = await axios
      .post(`${host}/sign-in`, {
        token: googleToken,
      })
      .then((res) => res.headers['authorization'])
      .catch((err) => console.log(err))
    console.log('User token:', userToken)
    if (userToken) window.localStorage.setItem('Authorization', userToken)

    // jwt 토큰을 Authorization 헤더에 추가하여 서버에 전달 => 해당 토큰을 resolve하여 사용자 상태 반환
    const state = await axios
      .get(`${host}/login-info`, {
        headers: {
          Authorization: window.localStorage.getItem('Authorization'),
        },
      })
      .then((res) => res.data.body)
      .catch((err) => console.log(err))
    console.log('Login state:', state)

    await axios
      .get(`${host}/user`, {
        headers: {
          Authorization: window.localStorage.getItem('Authorization'),
        },
      })
      .then((res) => {
        console.log(res.data.body)
        setUser(res.data.body)
      })
      .catch((err) => console.log(err))

    // USER : 현재 사용자가 구글 로그인이 되었고, 서버에도 회원가입이 되어있으므로 로그인에 성공함
    // LIMITED : 현재 사용자가 구글 로그인은 되었지만, 회원가입이 필요함
    // GUEST : 현재 사용자가 구글 로그인을 실패함
    if (state === 'USER') {
      if (signInSuccessUrl) navigate(signInSuccessUrl)
    } else if (state === 'LIMITED') {
      if (signUpUrl) navigate(signUpUrl)
    } else {
      if (signInFailureUrl) navigate(signInFailureUrl)
    }
  }

  const onError = () => {}

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        render={(renderProps) => (
          <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <img src={google} alt='로고' /> Google 로그인
          </div>
        )}
      />
    </GoogleOAuthProvider>
  )
}

export default function SignIn() {
  return (
    <MainContainer>
      <TitleContainer>
        <TextContainer>
          <p>for 자립준비청년</p>
          <h4>우리가 함께 만들어가는 달콤한 공간</h4>
        </TextContainer>
        <CooingLogo src={cooingLogo} alt='로고' />
        <img src={house} alt='로고' />
      </TitleContainer>
      <LoginButton
        signInSuccessUrl='/main-page'
        signUpUrl='/sign-up'
        signInFailureUrl='/sign-in-failure'
      />
    </MainContainer>
  )
}
