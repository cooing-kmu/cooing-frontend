import './App.css'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <RecoilRoot>
      <div id='App'>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
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
export default App;

