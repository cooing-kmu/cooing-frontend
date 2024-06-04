import './App.css'
import React, { Component } from 'react'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyPage from './pages/mypage/MyPage'
import Profile from './pages/mypage/profile/Profile'
import CheckList from './pages/mypage/checklist/CheckList'
import InterestInfo from './pages/mypage/interest/InterestInfo'
import Info from './pages/information/Info'
import Chatting from './pages/chatting/Chatting'
import MainPage from './pages/mainpage/MainPage'
import ThinkInfo from './pages/mypage/think/ThinkInfo'
import InterestEdit from './pages/mypage/interest/InterestEdit'
import ThinkEdit from './pages/mypage/think/ThinkEdit'
import SetInterestKeyword from './pages/mypage/interest/SetInterestKeyword'
import SetThinkKeyword from './pages/mypage/think/SetThinkKeyword'
import Footer from './components/footer/Footer'
import Alarm from './pages/mainpage/alarm/Alarm'
import MateInfo from './pages/mainpage/mateinfo/MateInfo'
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/SignIn';
import SignUp2 from "./pages/signup/SignUp2";
import SignUp3 from "./pages/signup/SignUp3";
import SignUp4 from "./pages/signup/SignUp4";
import SignUp5 from "./pages/signup/SignUp5";

export const DOMAIN_NAME = 'http://15.165.25.19:8080'

function App() {
  return (
    <RecoilRoot>
      <div id='App'>
        <CookiesProvider>
          <BrowserRouter>
            <Footer />
            <Routes>
              <Route path='/' element={<MyPage />}></Route>
              <Route path='/my-page' element={<MyPage />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/interest-info' element={<InterestInfo />}></Route>
              <Route path='/think-info' element={<ThinkInfo />}></Route>
              <Route path='/check-list' element={<CheckList />}></Route>
              <Route path='/info' element={<Info />}></Route>
              <Route path='/main-page' element={<MainPage />}></Route>
              <Route path='/chatting' element={<Chatting />}></Route>
              <Route path='/interest-edit' element={<InterestEdit />}></Route>
              <Route path='/think-edit' element={<ThinkEdit />}></Route>
              <Route
                path='/set-interest-keyword'
                element={<SetInterestKeyword />}
              ></Route>
              <Route
                path='/set-think-keyword'
                element={<SetThinkKeyword />}
              ></Route>
              <Route path='/alarm' element={<Alarm />}></Route>
              <Route path='/mate-info' element={<MateInfo />}></Route>

              <Route path="/sign-up" element={<SignUp/>}></Route>
              <Route path="/sign-up2" element={<SignUp2/>}></Route>
              <Route path="/sign-up3" element={<SignUp3/>}></Route>
              <Route path="/sign-up4" element={<SignUp4/>}></Route>
              <Route path="/sign-up5" element={<SignUp5/>}></Route>
              <Route path="/sign-in" element={<SignIn/>}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
  )
}

export default App
