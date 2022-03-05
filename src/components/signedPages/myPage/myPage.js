/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import styled from 'styled-components'
import MyPageNav from "./signedPages/myPage/myPageNavigation";
function MyPage() {
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
        <Page>
            <br/>
            <MyProfileContainerDiv>
                <MyProfileDIV>
                    <MyProfileName>31기<br/>박지한</MyProfileName>
                </MyProfileDIV>
                <Circle>JH</Circle>
            </MyProfileContainerDiv>
            <br/>
            <MyPageNavigationDiv><MyPageNav /></MyPageNavigationDiv>
            <BoldLine />
            <RenderBoxStyle><RenderBox /></RenderBoxStyle>
            <BoldLine />
        </Page>
    );
}

const Page = styled.div`
`
const MyProfileContainerDiv = styled.div`

`
const MyProfileDIV = styled.div`
    background-color: #88B9D7;
    border-radius: 8%;
    height: 130px;
    position: relative;
    z-index: 2;
`
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
    margin-top: -160px;
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

const MyPageNavigationDiv = styled.div`

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


