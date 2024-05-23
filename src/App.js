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
import Business from './pages/information/Business'
import BusinessDetail from './pages/information/BusinessDetail'
import Hiring from './pages/information/Hiring'
import HiringDetail from './pages/information/HiringDetail'

export const DOMAIN_NAME = 'http://15.165.25.19:8080'

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
              <Route path=':itemType/scraplist' element={<ScrapList />}></Route>
              <Route path='/policy' element={<Policy />}></Route>
              <Route path='/policy/:id' element={<PolicyDetail />}></Route>
              <Route path='/business' element={<Business />}></Route>
              <Route path='/business/:id' element={<BusinessDetail />}></Route>
              <Route path='/hiring' element={<Hiring />}></Route>
              <Route path='/hiring/:id' element={<HiringDetail />}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
  )
}

export default App
