import { useState } from "react";
import Navigation from "./navigation/navigation";
import Main from "./signedPages/mainPage/mainPage";
import Scheduler from "./signedPages/SchedulerPage";
import Setting from "./signedPages/settingPage";
import Test from "./signedPages/testPage";
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

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
        <PageRender>
            <Navigation setFlag={setFlag} />
            <DivideLine />
            <RenderBoxStyle><RenderBox /></RenderBoxStyle>
            <DivideLine />
            <ProducingInformation>
                <Typography variant="body2" color="text.secondary" align="center">
                Copyright © 14fret 늙은이들<br/>
                ver 1.0.0<br/>
                Updated 2022.03.04
                </Typography>
            </ProducingInformation>
        </PageRender>
    );
}

const PageRender = styled.div`
    margin: 10px;
`

const RenderBoxStyle = styled.div`
    min-height: 750px;
`

const DivideLine = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 1px;
`

const ProducingInformation = styled.div`
    min-height: 30px;
    align-items:center;
    margin: 0px;
    text-decoration: none;
    color: black;
    font-size: 10px;
`

export default SignedPages;