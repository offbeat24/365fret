import { useState } from "react";
import Navigation from "./navigation/navigation";
import Main from "./signedPages/mainPage";
import Scheduler from "./signedPages/SchedulerPage";
import Setting from "./signedPages/settingPage";
import Test from "./signedPages/testPage";

function SignedPages(){
    const [ flag, setFlag ] = useState(1)
    const RenderBox = () => {
        let contents
        if (flag === 1){
            contents = <Main/>
        }else if(flag === 2){
            contents = <Scheduler/>
        }else if(flag === 3){
            contents = <Setting/>
        }else if(flag === 4){
            contents = <Test/>
        }
        return contents;
    };
    return (
        <div>
            <Navigation setFlag={setFlag} />
            <RenderBox />
        </div>
    );
}

export default SignedPages;