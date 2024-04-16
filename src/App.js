import './App.css'
import { ThemeProvider } from 'styled-components'; // 1. Global color를 사용하기 위한 import
import React, { Component } from 'react';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    // <ThemeProvider>
      <RecoilRoot>
        <div id="App">
          <CookiesProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/sign-up" element={<SignUp/>}></Route>
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
