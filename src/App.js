import './App.css'
import React  from 'react';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import SignInFailureUrl from "./pages/signin/SignInFailureUrl";
import SignUp2 from "./pages/signup/SignUp2";
import SignUp3 from "./pages/signup/SignUp3";
import SignUp4 from "./pages/signup/SignUp4";
import SignUp5 from "./pages/signup/SignUp5";


function App() {
  return (
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
                <Route path="/sign-in-failure" element={<SignInFailureUrl/>}></Route>
              </Routes>
            </BrowserRouter>
          </CookiesProvider>
        </div>
      </RecoilRoot>
  )
}

export default App
