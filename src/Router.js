import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/mainPage";
import SignIn from "./components/signInPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<SignIn />} />
        <Route path = "/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
