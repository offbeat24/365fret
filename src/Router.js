import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/signInPage";
import SignedPages from "./components/signedpages";
import styled from 'styled-components';

function Router() {
  return (
    <TempTheme>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<SignIn />} />
          <Route path = "/main" element={<SignedPages />} />
        </Routes>
      </BrowserRouter>
    </TempTheme>
  )
}

const TempTheme = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
`
export default Router;