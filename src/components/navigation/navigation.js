import MainGray from './MainGray.png';
import SchedulerGray from './SchedulerGray.png';
import SettingGray from './SettingGray.png';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserID, Location } from '../recoil';
import { url } from '../../modules/Url';
import { Link } from 'react-router-dom'

function Navigation(){
    const ID = useRecoilValue(UserID);
    const [Loc, setLocation] = useRecoilState(Location);
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
    }, [ID]);


    return(
            <Nav>
                <CssBaseline/>
                <Link to={{
                            pathname: `/test`
                        }}>
                    <Logo style={{
                        backgroundColor:
                            Loc === '/test' ?
                                '#4472C4' : ''
                    }}>365FRET</Logo>
                </Link>
                <NavLinkBox>
                <ImgContainer style={{
                    backgroundColor:
                        Loc === '/main' ?
                            '#4472C4' : ''
                }}>
                    <Link to={{
                            pathname: `/main`
                        }}>
                        <NavBtnImg onClick={() => setLocation('/main')} src={MainGray} />
                    </Link>
                </ImgContainer>
                <SchedulerContainer style={{
                    backgroundColor:
                        Loc === '/main/schedule/output'?
                            '#4472C4' : ''
                }}>
                    <Link to={{
                        pathname: `/main/schedule/output`
                    }}>
                        <NavBtnImg onClick={() => setLocation('/main/schedule/output')} src={SchedulerGray} />
                    </Link>
                </SchedulerContainer>
                <SchedulerContainer style={{
                    backgroundColor:
                        Loc === '/main/schedule/input' ?
                            '#4472C4' : ''
                }}>
                    <Link to={{
                        pathname: `/main/schedule/input`
                    }}>
                        <NavBtnImg onClick={() => setLocation('/main/schedule/input')} src={SchedulerGray} />
                        </Link>
                </SchedulerContainer>
                <SettingContainer style={{
                    backgroundColor:
                        Loc === '/main/setting' ?
                            '#4472C4' : ''
                }}>
                    <Link to={{
                            pathname: `/main/setting`
                        }}>
                        <NavBtnImg onClick={() => setLocation('/main/setting')} src={SettingGray} />
                    </Link>
                </SettingContainer>
                    <NavLink>
                    <Link to={{
                            pathname: `/main/profile`
                        }}>
                        <Circle onClick={() => setLocation('/main/profile')}>
                                {
                                    userProfile === 0 ?
                                    ''
                                    :
                                    userProfile[userProfile.length-1].name[(userProfile[userProfile.length-1].name.length)-1]
                                }
                            </Circle>
                        </Link>
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
