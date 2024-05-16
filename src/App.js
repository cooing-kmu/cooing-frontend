import './App.css'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Info from './pages/information/Info'
import ScrapList from './pages/information/ScrapList'
import Policy from './pages/information/Policy'
import PolicyDetail from './pages/information/PolicyDetail'
import Footer from './components/footer/Footer'

function App() {
  // 네비게이션 바가 필요 없는 페이지의 경로 배열

  return (
    <RecoilRoot>
      <div id='App'>
        <CookiesProvider>
          <BrowserRouter>
            <Footer />
            <Routes>
              <Route path='/sign-up' element={<SignUp />}></Route>
              <Route path='/sign-in' element={<SignIn />}></Route>
              <Route path='/info' element={<Info />}></Route>
              <Route path='/scraplist' element={<ScrapList />}></Route>
              <Route path='/policy' element={<Policy />}></Route>
              <Route path='/policy/:id' element={<PolicyDetail />}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
  )
}

export default App
