import MainGray from './MainGray.png';
import SchedulerGray from './SchedulerGray.png';
import SettingGray from './SettingGray.png';
import ThreeBars from './Threebars.png';
import Instagram from './instagram.svg';
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
    const [sideExpended, setSideExpended] = useState(0);
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

    const sideExpend = () => {
        setSideExpended(prev => {return !prev});
    }

    return(
            <Nav>
                <CssBaseline/>
                <Link to={{
                            pathname: `/test`
                        }}>
                    <Logo style={{
                        textDecoration:'underline #324182',
                        backgroundColor:
                            Loc === '/test' ?
                                '#4472C4' : ''
                    }}>365FRET</Logo>
                </Link>
                <Hamburger onClick={() => sideExpend()} src={ThreeBars} />
                {sideExpended
                ?
                <SideBar>
                    <NavLink>
                        <Link to={{
                            pathname: `/main/profile`
                        }}>
                            <ProfileCard style = {{textDecoration:'underline white'}}>
                                <Circle onClick={() => {setLocation('/main/profile'); setSideExpended(0);}} style = {{textDecoration:'underline #324182'}}>
                                    {
                                        userProfile === 0 ?
                                        ''
                                        :
                                        userProfile[userProfile.length-1].name[(userProfile[userProfile.length-1].name.length)-1]
                                    }
                                </Circle>
                                프로필카드(클릭하면 마이페이지로 이동)
                            </ProfileCard>
                        </Link>
                    </NavLink>
                    <NavigationList>
                        <NavLinkBox>
                            <ImgContainer style={{
                                backgroundColor:
                                    Loc === '/main' ?
                                        '#4472C4' : ''
                            }}>
                                <Link to={{
                                        pathname: `/main`
                                    }}>
                                    <NavBtnImg onClick={() => {setLocation('/main'); setSideExpended(0);}} src={MainGray} />
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
                                    <NavBtnImg onClick={() => {setLocation('/main/schedule/output'); setSideExpended(0);}} src={SchedulerGray} />
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
                                    <NavBtnImg onClick={() => {setLocation('/main/setting'); setSideExpended(0);}} src={SettingGray} />
                                </Link>
                            </SettingContainer>
                        </NavLinkBox>
                    </NavigationList>
                    <NavigationFooter>
                        <img src = {Instagram}/>
                    </NavigationFooter>
                </SideBar>
                :
                ''
                }
            </Nav>
    );
}

const ProfileCard = styled.div`
    margin: 20px;
    padding: 15px;
    border-radius: 0.5rem;
    border: solid 0px black;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
    background-color:white;
    color: black;
`

const NavigationList = styled.div`
    margin: 20px;
    padding: 10px;
    background-color:white;
    border-radius: 0.5rem;
    border: solid 0px black;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
    color: black;
`

const NavigationFooter = styled.div`
    margin: 20px;
    margin-top: 60px;
    padding: 10px;
    border-radius: 0.5rem;
    border: solid 0px black;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
    background-color:white;
    color: black;
`

const SideBar = styled.div`
    padding-top: 50px;
    margin-top:;
    right: 0px;
    width: 60%;
    height: 100%;
    position:absolute;
    background-color: #324182;
    z-index:2;
`

const Nav = styled.div`
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    z-index: 3;
`

const Logo = styled.a`
    color: white;
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items:center;
    font-size: 35px;
    margin: 0px;
    margin-top: 12px;
    text-decoration: none;
`

const NavLinkBox = styled.div`
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
const Hamburger = styled.img`
    margin-top: 22px;
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
    background-color: #324182;
    border-radius: 50%;
    text-align: center;
    line-height: 35px;
    font-weight: bold;
    font-size: 15px;
    color: white;
    text-decoration: none;
`
export default Navigation;
