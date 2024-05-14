import './App.css'
import { ThemeProvider } from 'styled-components' // 1. Global color를 사용하기 위한 import
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyPage from './pages/mypage/MyPage'
import Profile from './pages/profile/Profile'
import CheckList from './pages/checklist/CheckList'
import MatchingInfo from './pages/matchinginfo/MatchingInfo'
import Announcement from './pages/announcement/Announcement'
import Community from './pages/community/Community'
import Chatting from './pages/chatting/Chatting'
import MainPage from './pages/mainpage/MainPage'

function App() {
  return (
    // <ThemeProvider>
    <RecoilRoot>
      <div id='App'>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<MyPage />}></Route>
              <Route path='/my-page' element={<MyPage />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/matching-info' element={<MatchingInfo />}></Route>
              <Route path='/check-list' element={<CheckList />}></Route>
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/sign-in' element={<SignIn />}></Route>
              <Route path='/announcement' element={<Announcement />}></Route>
              <Route path='/community' element={<Community />}></Route>
              <Route path='/main-page' element={<MainPage />}></Route>
              <Route path='/chatting' element={<Chatting />}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
    // </ThemeProvider>
  )
}

export default App
