import { useEffect } from "react";
import Navigation from "./navigation/navigation";
// import Main from "./signedPages/mainPage";
// import Scheduler from "./signedPages/SchedulerPage";
// import Setting from "./signedPages/settingPage";

function SignedPages(){
    function RenderBox({ renderFlag }){
        return (
            <div>MAINSPACE</div>
        )
        // if (renderFlag === 1){
        //     return (
        //         <Main/>
        //     );
        // }else if(renderFlag === 2){
        //     return (
        //         <Scheduler/>
        //     );
        // }else if(renderFlag === 3){
        //     return (
        //         <Setting/>
        //     );
        // }
    };
    useEffect(Navigation,[]);
    return (
        <div>
            <Navigation/>
            <RenderBox renderFlag={Navigation.flag} />
        </div>
    );
}

export default SignedPages;