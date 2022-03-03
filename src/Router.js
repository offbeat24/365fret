import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/navigation";
import SignIn from "./components/signInPage";
import Main from "./components/pages/mainPage";
import Scheduler from "./components/pages/SchedulerPage";
import Setting from "./components/pages/settingPage";

function Router() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path = "/" element={<SignIn />} />
        <Route path = "/main" element={<Main />} />
        <Route path = "/scheduler" element={<Scheduler />} />
        <Route path = "/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;