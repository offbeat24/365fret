/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import styled from 'styled-components'
import MyPageNav from "./myPageNavigation";
import MyStatus from "./myStatus";
import MyHistory from "./myHistory";
import MyVisitor from "./myVisitor";
import MyProfile from "./myProfile";

function MyPage() {
    const [ flag, setFlag ] = useState(0);
    const RenderBox = () => {
        let contents
        if(flag === 0){
            contents = <MyStatus/>
        } else if (flag === 1){
            contents = <MyHistory/>
        }else if(flag === 2){
            contents = <MyVisitor/>
        }
        return contents;
    };

    return (
        <Page>
            <br/>
            <MyProfileDIV><MyProfile/></MyProfileDIV>
            <br/>
            <MyPageNav flag = {flag} setFlag={setFlag}/>
            <BoldLine />
            <RenderBoxStyle><RenderBox /></RenderBoxStyle>
        </Page>
    );
}

const Page = styled.div`
    margin: 10px;
`
const MyProfileDIV = styled.div`
    border-radius: 0.5rem;
`
/*
const MyProfileName = styled.div`
    text-align: center;
    text-justify: auto;
    font-weight: bold;
    font-size: 20px;
    z-index: 3;
    position: absolute;
    top: 55%;
    left: 13.1%;
`
const Circle = styled.div`
    margin-top: -165px;
    margin-left: 30px;
    width: 100px;
    height: 100px;
    background-color: #4472C4;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    font-size: 50px;
    position: absolute;
    z-index: 3;
    box-shadow: 3px 3px 3px gray;
`
*/
const BoldLine = styled.hr`
    background-color: #88B9D7;
    border: 0px;
    height: 3px;
`

const RenderBoxStyle = styled.div`
`
export default MyPage;
