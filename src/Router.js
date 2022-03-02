import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/navigation";
import Main from "./components/mainPage";
import SignIn from "./components/signInPage";
import Scheduler from "./components/SchedulerPage";
import Setting from "./components/settingPage";

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