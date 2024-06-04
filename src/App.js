import './App.css'
import React, { Component } from 'react'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 네비게이션 라우팅 페이지
import Info from './pages/information/Info'
import Community from './pages/community/Community'
import MainPage from './pages/mainpage/MainPage'
import Chatting from './pages/chatting/Chatting'
import MyPage from './pages/mypage/MyPage'

// 로그인 관련 라우팅 페이지
import SignIn from './pages/signin/SignIn'
import SignInFailureUrl from './pages/signin/SignInFailureUrl'

// 회원가입 관련 라우팅 페이지
import SignUp from './pages/signup/SignUp'
import SignUp2 from './pages/signup/SignUp2'
import SignUp3 from './pages/signup/SignUp3'
import SignUp4 from './pages/signup/SignUp4'
import SignUp5 from './pages/signup/SignUp5'

// Info 하위 라우팅 페이지

// Community 하위 라우팅 페이지

// MainPage 하위 라우팅 페이지
import Alarm from './pages/mainpage/alarm/Alarm'
import MateInfo from './pages/mainpage/mateinfo/MateInfo'

// Chatting 하위 라우팅 페이지
import FreeBoard from './pages/community/freeboard/FreeBoard'
import FreeBoardPost from './pages/community/freeboard/FreeBoardPost'
import FreeBoardWrite from './pages/community/freeboard/FreeBoardWrite'
import Volunteer from './pages/community/volunteer/Volunteer'
import VolunteerPost from './pages/community/volunteer/VolunteerPost'
import VolunteerWrite from './pages/community/volunteer/VolunteerWrite'
import Club from './pages/community/club/Club'
import ClubPost from './pages/community/club/ClubPost'
import ClubWrite from './pages/community/club/ClubWrite'
import Study from './pages/community/study/Study'
import StudyPost from './pages/community/study/StudyPost'
import StudyWrite from './pages/community/study/StudyWrite'
import MyWrote from './pages/community/MyWrote'
import Comment from './pages/community/Comment'
import Scrap from './pages/community/Scrap'

// MyPage 하위 라우팅 페이지
import Profile from './pages/mypage/profile/Profile'
import CheckList from './pages/mypage/checklist/CheckList'
import InterestInfo from './pages/mypage/interest/InterestInfo'
import InterestEdit from './pages/mypage/interest/InterestEdit'
import SetInterestKeyword from './pages/mypage/interest/SetInterestKeyword'
import ThinkInfo from './pages/mypage/think/ThinkInfo'
import ThinkEdit from './pages/mypage/think/ThinkEdit'
import SetThinkKeyword from './pages/mypage/think/SetThinkKeyword'

// 푸터
import Footer from './components/footer/Footer'

export const DOMAIN_NAME = 'http://15.165.25.19:8080'

function App() {
  return (
    <RecoilRoot>
      <div id='App'>
        <CookiesProvider>
          <BrowserRouter>
            <Footer />
            <Routes>
              {/* 네비게이션 라우팅 페이지 */}
              <Route path='/' element={<SignIn />}></Route>
              <Route path='/info' element={<Info />}></Route>
              <Route path='/community' element={<Community />}></Route>
              <Route path='/main-page' element={<MainPage />}></Route>
              <Route path='/chatting' element={<Chatting />}></Route>
              <Route path='/my-page' element={<MyPage />}></Route>

              {/* 로그인 관련 라우팅 페이지 */}
              <Route
                path='/sign-in-failure'
                element={<SignInFailureUrl />}
              ></Route>

              {/* 회원가입 관련 라우팅 페이지 */}
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/sign-up2' element={<SignUp2 />}></Route>
              <Route path='/sign-up3' element={<SignUp3 />}></Route>
              <Route path='/sign-up4' element={<SignUp4 />}></Route>
              <Route path='/sign-up5' element={<SignUp5 />}></Route>

              {/* Info 하위 라우팅 페이지 */}

              {/* Community 하위 라우팅 페이지 */}
              <Route path='/free-board' element={<FreeBoard />}></Route>
              <Route
                path='/free-board-post/:boardId'
                element={<FreeBoardPost />}
              />
              <Route
                path='/free-board-write'
                element={<FreeBoardWrite />}
              ></Route>
              <Route path='/volunteer' element={<Volunteer />}></Route>
              <Route
                path='/volunteer-post/:volunteerId'
                element={<VolunteerPost />}
              />
              <Route
                path='/volunteer-write'
                element={<VolunteerWrite />}
              ></Route>
              <Route path='/club' element={<Club />}></Route>
              <Route path='/club-post/:clubId' element={<ClubPost />} />
              <Route path='/club-write' element={<ClubWrite />}></Route>
              <Route path='/study' element={<Study />}></Route>
              <Route path='/study-post/:studyId' element={<StudyPost />} />
              <Route path='/study-write' element={<StudyWrite />}></Route>
              <Route path='/my-wrote' element={<MyWrote />}></Route>
              <Route path='/comment' element={<Comment />}></Route>
              <Route path='/scrap' element={<Scrap />}></Route>

              {/* MainPage 하위 라우팅 페이지 */}
              <Route path='/alarm' element={<Alarm />}></Route>
              <Route path='/mate-info' element={<MateInfo />}></Route>

              {/* Chatting 하위 라우팅 페이지 */}

              {/* MyPage 하위 라우팅 페이지 */}
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/interest-info' element={<InterestInfo />}></Route>
              <Route path='/interest-edit' element={<InterestEdit />}></Route>
              <Route
                path='/set-interest-keyword'
                element={<SetInterestKeyword />}
              ></Route>
              <Route path='/think-info' element={<ThinkInfo />}></Route>
              <Route path='/think-edit' element={<ThinkEdit />}></Route>
              <Route
                path='/set-think-keyword'
                element={<SetThinkKeyword />}
              ></Route>
              <Route path='/check-list' element={<CheckList />}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
  )
}
export default App
