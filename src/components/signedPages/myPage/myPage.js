/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import styled from 'styled-components'
import MyPageNav from "./myPageNavigation";
import MyStatus from "./myStatus";
import MyScheduler from "./myScheduleSetting";
import MyVisitor from "./myVisitor";
import MyProfile from "./myProfile";

function MyPage() {
    const [ flag, setFlag ] = useState(0);
    const RenderBox = () => {
        let contents
        if(flag === 0){
            contents = <MyStatus/>
        } else if (flag === 1){
            contents = <MyScheduler/>
        }else if(flag === 2){
            contents = <MyVisitor/>
        }
        return contents;
    };

    return (
        <Page>
            <br/>
            <MyProfile/>
            <br/>
            <MyPageNav setFlag={setFlag}/>
            <BoldLine />
            <RenderBoxStyle><RenderBox /></RenderBoxStyle>
            <BoldLine />
        </Page>
    );
}

const Page = styled.div`
`


const BoldLine = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 3px;
`

const RenderBoxStyle = styled.div`
    min-height: 750px;
`
export default MyPage;


