import './App.css'
import { ThemeProvider } from 'styled-components'; // 1. Global color를 사용하기 위한 import
import React, { Component } from 'react';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SignUp2 from "./pages/SignUp2";
import SignUp3 from "./pages/SignUp3";
import SignUp4 from "./pages/SignUp4";
import SignUp5 from "./pages/SignUp5";


function App() {
  return (
    // <ThemeProvider>
      <RecoilRoot>
        <div id="App">
          <CookiesProvider>
            <BrowserRouter>
              <Routes>
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
    // </ThemeProvider>
  )
}

export default App
