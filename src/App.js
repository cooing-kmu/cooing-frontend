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
import InterestInfo from './pages/interestinfo/InterestInfo'
import Announcement from './pages/announcement/Announcement'
import Community from './pages/community/Community'
import Chatting from './pages/chatting/Chatting'
import MainPage from './pages/mainpage/MainPage'
import ThinkInfo from './pages/thinkinfo/ThinkInfo'
import InterestEdit from './pages/interestedit/InterestEdit'
import ThinkEdit from './pages/thinkedit/ThinkEdit'
import Alarm from './pages/mainpage/alarm/Alarm'
import MateInfo from './pages/mainpage/mateinfo/MateInfo'
import FreeBoard from './pages/community/freeboard/FreeBoard'
import FreeBoardWrite from './pages/community/freeboard/FreeBoardWrite'
import FreeBoardPost from './pages/community/freeboard/FreeBoardPost'

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
              <Route path='/interest-info' element={<InterestInfo />}></Route>
              <Route path='/think-info' element={<ThinkInfo />}></Route>
              <Route path='/check-list' element={<CheckList />}></Route>
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/sign-in' element={<SignIn />}></Route>
              <Route path='/announcement' element={<Announcement />}></Route>
              <Route path='/community' element={<Community />}></Route>
              <Route path='/main-page' element={<MainPage />}></Route>
              <Route path='/chatting' element={<Chatting />}></Route>
              <Route path='/interest-edit' element={<InterestEdit />}></Route>
              <Route path='/think-edit' element={<ThinkEdit />}></Route>
              <Route path='/think-edit' element={<ThinkEdit />}></Route>
              <Route path='/alarm' element={<Alarm />}></Route>
              <Route path='/mate-info' element={<MateInfo />}></Route>
              <Route path='/free-board' element={<FreeBoard />}></Route>
              <Route
                path='/free-board-write'
                element={<FreeBoardWrite />}
              ></Route>
              <Route
                path='/free-board-post/:boardId'
                element={<FreeBoardPost />}
              />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
    // </ThemeProvider>
  )
}

export default App
