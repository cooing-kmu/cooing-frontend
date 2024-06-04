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
import Community from './pages/community/Community'
import Club from './pages/community/club/Club'
import Comment from './pages/community/Comment'
import FreeBoard from './pages/community/freeboard/FreeBoard'
import MyWrote from './pages/community/MyWrote'
import Scrap from './pages/community/Scrap'
import Study from './pages/community/study/Study'
import Volunteer from './pages/community/volunteer/Volunteer'
import FreeBoardWrite from './pages/community/freeboard/FreeBoardWrite'
import ClubWrite from './pages/community/club/ClubWrite'
import StudyWrite from './pages/community/study/StudyWrite'
import VolunteerWrite from './pages/community/volunteer/VolunteerWrite'
import FreeBoardPost from './pages/community/freeboard/FreeBoardPost'
import StudyPost from './pages/community/study/StudyPost'
import ClubPost from './pages/community/club/ClubPost'
import VolunteerPost from './pages/community/volunteer/VolunteerPost'

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

              <Route path='/community' element={<Community />}></Route>
              <Route path='/free-board' element={<FreeBoard />}></Route>
              <Route path='/club' element={<Club />}></Route>
              <Route path='/comment' element={<Comment />}></Route>
              <Route path='/my-wrote' element={<MyWrote />}></Route>
              <Route path='/scrap' element={<Scrap />}></Route>
              <Route path='/study' element={<Study />}></Route>
              <Route path='/volunteer' element={<Volunteer />}></Route>
              <Route path='/free-board-write' element={<FreeBoardWrite />}></Route>
              <Route path='/club-write' element={<ClubWrite />}></Route>
              <Route path='/study-write' element={<StudyWrite />}></Route>
              <Route path='/volunteer-write' element={<VolunteerWrite />}></Route>
              <Route path="/free-board-post/:boardId" element={<FreeBoardPost />} />
              <Route path="/study-post/:studyId" element={<StudyPost />} />
              <Route path="/club-post/:clubId" element={<ClubPost />} />
              <Route path="/volunteer-post/:volunteerId" element={<VolunteerPost />} />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
  )
}

export default App
