import { useState } from "react";
import Navigation from "./navigation/navigation";
import Main from "./signedPages/mainPage/mainPage";
import Scheduler from "./signedPages/SchedulerPage";
import Setting from "./signedPages/settingPage";
import Test from "./signedPages/testPage";
import MyPage from "./signedPages/myPage/myPage"
import styled from 'styled-components';

function SignedPages(){
    const [ flag, setFlag ] = useState(1)
    const RenderBox = () => {
        let contents
        if(flag === 0){
            contents = <Test/>
        } else if (flag === 1){
            contents = <Main/>
        }else if(flag === 2){
            contents = <Scheduler/>
        }else if(flag === 3){
            contents = <Setting/>
        }else if(flag === 4){
            contents = <MyPage/>
        }
        return contents;
    };
    return (
        <PageRender>
            <NavigationDIV><Navigation setFlag={setFlag} /></NavigationDIV>
            <BoldLine />
            <RenderBoxStyle><RenderBox /></RenderBoxStyle>
            <ProducingInformation>
                Copyright © 14fret 늙은이들<br/>
                ver 1.0.0<br/>
                Updated 2022.03.04
            </ProducingInformation>
        </PageRender>
    );
}
const BoldLine = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 2px;
`
const PageRender = styled.div`
`
const NavigationDIV = styled.div`
`

const RenderBoxStyle = styled.div`
    min-height: 730px;
`

const ProducingInformation = styled.div`
    min-height: 30px;
    align-items:center;
    margin: 0px;
    text-decoration: none;
    color: black;
    font-size: 13px;
    text-align:center;
    font-color: #d3d3d3;
`

export default SignedPages;