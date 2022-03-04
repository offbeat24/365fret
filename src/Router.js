import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/signInPage";
import SignedPages from "./components/signedpages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<SignIn />} />
        <Route path = "/main" element={<SignedPages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;