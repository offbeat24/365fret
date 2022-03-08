/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import styled from 'styled-components'
import MyPageNav from "./myPageNavigation";
import MyStatus from "./myStatus";
import MyScheduler from "./myScheduleSetting";
import MyVisitor from "./myVisitor";
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
            <MyProfileContainerDiv>
                <MyProfileDIV>
                    <MyProfileName>31기<br/>박지한</MyProfileName>
                </MyProfileDIV>
                <Circle>JH</Circle>
            </MyProfileContainerDiv>
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
const MyProfileContainerDiv = styled.div`

`
const MyProfileDIV = styled.div`
    background-color: #88B9D7;
    border-radius: 0.5rem;
    height: 150px;
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

const BoldLine = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 3px;
`

const RenderBoxStyle = styled.div`
    min-height: 750px;
`
export default MyPage;


