import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginButton = ({ signInSuccessUrl, signUpUrl, signInFailureUrl }) => {
  const host = 'http://15.165.25.19:8080'
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
    console.log(state)

    // USER : 현재 사용자가 구글 로그인이 되었고, 서버에도 회원가입이 되어있으므로 로그인에 성공함
    // LIMITED : 현재 사용자가 구글 로그인은 되었지만, 회원가입이 필요함
    // GUEST : 현재 사용자가 구글 로그인을 실패함
    if (state == 'USER') {
      if (signInSuccessUrl) navigate(signInSuccessUrl)
    } else if (state == 'LIMITED') {
      console.log(signUpUrl)
      if (signUpUrl) navigate(signUpUrl)
    } else {
      if (signInFailureUrl) navigate(signInFailureUrl)
    }
  }

  const onError = () => {}

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin  onSuccess={onSuccess} onError={onError} />
      </GoogleOAuthProvider>
    </div>
  )
}

export default LoginButton
