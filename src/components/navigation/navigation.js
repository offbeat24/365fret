// import MainBlack from './MainBlack.png';
//import SchedulerBlack from './SchedulerBlack.png';
//import SettingBlack from './SettingBlack.png';
import MainGray from './MainGray.png';
import SchedulerGray from './SchedulerGray.png';
import SettingGray from './SettingGray.png';
// import MainWhite from './MainWhite.png';
// import SchedulerWhite from './SchedulerWhite.png';
// import SettingWhite from './SettingWhite.png';

import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserID } from '../recoil';
import { url } from '../../modules/Url';

function Navigation({ flag, setExpanded, clickIcon }){
    const ID = useRecoilValue(UserID);
    const [userProfile, setUserProfile] = useState(0);
    useEffect(() => {
        const getUserProfile = async () => {
            await axios.post(
                `${url}/getUserProfile`,
                { userID: ID },
            ).then(response => {
                setUserProfile(response.data);
            })
        };
        getUserProfile();
    }, [ ID ]);

    const expandSchedule = () => {
        setExpanded(prev => !prev);
    }
    
    return(
            <Nav>
                <CssBaseline/>
                <Logo onClick={() => clickIcon(0)}>365FRET</Logo>
                <NavLinkBox>
                    <MainContainer><NavBtnImg flag = {flag} onClick={() => clickIcon(1)} src={MainGray}/></MainContainer>
                    <SchedulerContainer><NavBtnImg flag = {flag} onClick={() => expandSchedule()} src={SchedulerGray}/></SchedulerContainer>
                    <SettingContainer><NavBtnImg flag = {flag} onClick={() => clickIcon(3)} src={SettingGray}/></SettingContainer>
                    <NavLink>
                        <Circle onClick={() => clickIcon(4)}>
                            {
                                userProfile === 0 ?
                                ''
                                :
                                userProfile[userProfile.length-1].name[(userProfile[userProfile.length-1].name.length)-1]
                            }
                        </Circle>
                    </NavLink>
                </NavLinkBox>
            </Nav>
    );
}

const Nav = styled.div`
    margin-left: 18px;
    margin-right: 18px;
    margin-top: 13px;
    margin-bottom: 10px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.a`
    color: #222D65;
    font-family: 'Anton', sans-serif;
    display: flex;
    align-items:center;
    font-size: 35px;
    margin: 0px;
    text-decoration: none;
`

const NavLinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLink = styled.a`
    margin: 5px;
    text-decoration: none;
    color: black;
    color: #222D65;
`
const ImgContainer = styled.div`
    margin: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 35px;
    color: transparent;
    z-index: 2;
`

const MainContainer = styled(ImgContainer)`
    background-color: ${ props => ( props.flag === 1 ? '#4472C4' : '' )};
`

const SchedulerContainer = styled(ImgContainer)`
    background-color: ${ props => ( props.flag === 2 ? '#4472C4' : '' )};
`

const SettingContainer = styled(ImgContainer)`
    background-color: ${ props => ( props.flag === 3 ? '#4472C4' : '' )};
`
const NavBtnImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: transparent;
    z-index: 3;
`
const Circle = styled.div`
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
export default Navigation;