import './App.css'
import { ThemeProvider } from 'styled-components' // 1. Global color를 사용하기 위한 import
import React, { Component } from 'react'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import SignUp2 from './pages/SignUp/SignUp2'
import SignUp3 from './pages/SignUp/SignUp3'
import SignUp4 from './pages/SignUp/SignUp4'
import SignUp5 from './pages/SignUp/SignUp5'
import Community from './pages/Community/Community'
import Club from './pages/Community/Club/Club'
import Comment from './pages/Community/Comment'
import FreeBoard from './pages/Community/FreeBoard/FreeBoard'
import MyWrote from './pages/Community/MyWrote'
import Scrap from './pages/Community/Scrap'
import Study from './pages/Community/Study/Study'
import Volunteer from './pages/Community/Volunteer/Volunteer'
import FreeBoardWrite from './pages/Community/FreeBoard/FreeBoardWrite'
import ClubWrite from './pages/Community/Club/ClubWrite'
import StudyWrite from './pages/Community/Study/StudyWrite'
import VolunteerWrite from './pages/Community/Volunteer/VolunteerWrite'
import FreeBoardPost from './pages/Community/FreeBoard/FreeBoardPost'

function App() {
  return (
    // <ThemeProvider>
    <RecoilRoot>
      <div id='App'>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/sign-up2' element={<SignUp2 />}></Route>
              <Route path='/sign-up3' element={<SignUp3 />}></Route>
              <Route path='/sign-up4' element={<SignUp4 />}></Route>
              <Route path='/sign-up5' element={<SignUp5 />}></Route>
              <Route path='/sign-in' element={<SignIn />}></Route>
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
              <Route path='/free-board-post' element={<FreeBoardPost />}></Route>              <Route path='/free-board-post' element={<FreeBoardPost />}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
    // </ThemeProvider>
  )
}

export default App
