import { useState } from "react";
import Navigation from "./navigation/navigation";
import Main from "./signedPages/mainPage/mainPage";
import Setting from "./signedPages/settingPage/settingPage";
import Test from "./signedPages/testPage";
import MyPage from "./signedPages/myPage/myPage"
import styled from 'styled-components';
import InputPage from "./signedPages/schedulerPage/inputPage";
import OutputPage from "./signedPages/schedulerPage/outputPage";

function SignedPages(){
    const [ flag, setFlag ] = useState(1);
    const [ expanded, setExpanded ] = useState(0);
    const RenderBox = () => {
        let contents
        if(flag === 0){
            contents = <Test/>
        } else if (flag === 1){
            contents = <Main/>
        }else if(flag === 2){
            contents = <OutputPage/>
        }else if(flag === 3){
            contents = <Setting/>
        }else if(flag === 4){
            contents = <MyPage/>
        }else if(flag === 5){
            contents = <InputPage/>
        }
        return contents;
    };

    const clickIcon = (num) =>{
        setFlag(num);
        setExpanded(0);
    }

    return (
        <PageRender>
            <Header>
            <NavigationDIV><Navigation flag={flag} setExpanded={setExpanded} clickIcon={clickIcon} /></NavigationDIV>
            <BoldLine />
            {expanded?
            <TestDIV>
                <Circle1 onClick={() => clickIcon(2)}>
                    ALL
                </Circle1>
                <Circle2 onClick={() => clickIcon(5)}>
                    MY
                </Circle2>
            </TestDIV>
            :
            ''
            }
            </Header>
            <Body>
            <RenderBoxStyle><RenderBox /></RenderBoxStyle>
            <ProducingInformation>
                Copyright © 14fret 늙은이들<br/>
                ver 1.0.0<br/>
                Updated 2022.03.04
            </ProducingInformation>
            </Body>
        </PageRender>
    );
}

const Circle1 = styled.div`
  position: absolute;
  top: 10px;
  right: 16.5px;
  z-index: 5;
  margin: 0px;
  width: 35px;
  height: 35px;
  background-color: #4472C4;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  font-weight: bold;
  font-size: 15px;
`
const Circle2 = styled.div`
  position: absolute;
  top: 55px;
  right: 16.5px;
  z-index: 5;
  margin: 0px;
  width: 35px;
  height: 35px;
  background-color: #4472C4;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  font-weight: bold;
  font-size: 15px;
`

const TestDIV = styled.div`
    z-index: 11;
    position: absolute;
    top: 60px;
    right: 103px;
    height: 100px;
    width: 70px;
    border: solid #4472C4 1px;
    border-top: 0px;
    background-color: white;
`

const Header = styled.div`
    z-index: 10;
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const Body = styled.div`
    padding-top: 55px;
`

const BoldLine = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 2px;
    margin-bottom:-1px;
`
const PageRender = styled.div`
    margin:10px;
`
const NavigationDIV = styled.div`
`

const RenderBoxStyle = styled.div`
    min-height: 500px;
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