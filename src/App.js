import './App.css'
import { ThemeProvider } from 'styled-components' // 1. Global color를 사용하기 위한 import
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyPage from './pages/mypage/MyPage'
// import Profile from './pages/mypage/profile/Profile'
// import CheckList from './pages/mypage/checklist/CheckList'
// import InterestInfo from './pages/mypage/interest/InterestInfo'
// import Info from './pages/information/Info'
// import Community from './pages/community/Community'
import Chatting from './pages/chatting/Chatting'
import MainPage from './pages/mainpage/MainPage'
// import ThinkInfo from './pages/mypage/think/ThinkInfo'
// import InterestEdit from './pages/mypage/interest/InterestEdit'
// import ThinkEdit from './pages/mypage/think/ThinkEdit'
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
              {/*<Route path='/profile' element={<Profile />}></Route>*/}
              {/*<Route path='/interest-info' element={<InterestInfo />}></Route>*/}
              {/*<Route path='/think-info' element={<ThinkInfo />}></Route>*/}
              {/*<Route path='/check-list' element={<CheckList />}></Route>*/}
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/sign-in' element={<SignIn />}></Route>
              {/*<Route path='/info' element={<Info />}></Route>*/}
              {/*<Route path='/community' element={<Community />}></Route>*/}
              <Route path='/main-page' element={<MainPage />}></Route>
              <Route path='/chatting' element={<Chatting />}></Route>
              {/*<Route path='/interest-edit' element={<InterestEdit />}></Route>*/}
              {/*<Route path='/think-edit' element={<ThinkEdit />}></Route>*/}
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
