import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signInPage";
import SignedPages from "./components/signedpages";
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';

function Router() {
  return (
    <TempTheme>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<SignIn />} />
            <Route path = "/main" element={<SignedPages />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </TempTheme>
  )
}

const TempTheme = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
`
export default Router;