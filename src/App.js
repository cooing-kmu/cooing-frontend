import './App.css'
import { ThemeProvider } from 'styled-components' // 1. Global color를 사용하기 위한 import
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyPage from './pages/mypage/MyPage'
import Chatting from './pages/chatting/Chatting'
import MainPage from './pages/mainpage/MainPage'
import Footer from './components/footer/Footer'
import Alarm from './pages/mainpage/alarm/Alarm'
import MateInfo from './pages/mainpage/mateinfo/MateInfo'

export const DOMAIN_NAME = 'http://15.165.25.19:8080'

function App() {
  return (
    // <ThemeProvider>
    <RecoilRoot>
      <div id='App'>
        <CookiesProvider>
          <BrowserRouter>
            <Footer />
            <Routes>
              <Route path='/' element={<MyPage />}></Route>
              <Route path='/my-page' element={<MyPage />}></Route>
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/sign-in' element={<SignIn />}></Route>
              <Route path='/main-page' element={<MainPage />}></Route>
              <Route path='/chatting' element={<Chatting />}></Route>
              <Route path='/alarm' element={<Alarm />}></Route>
              <Route path='/mate-info' element={<MateInfo />}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
    // </ThemeProvider>
  )
}

export default App
