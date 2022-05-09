import ThreeBars from './Threebars.png';
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
    const [scheduleExpended, setScheduleExpended] = useState(0);
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

    const scheduleExpend = () => {
        setScheduleExpended(prev => {return !prev});
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
                <SideBarDIV>
                    <SideBarBG onClick={() => sideExpend()}/>
                <SideBar>
                    <NavLink>
                        <Link to={{
                            pathname: `/main/profile`
                        }}>
                            <ProfileCard onClick={() => {setLocation('/main/profile'); setSideExpended(0);setScheduleExpended(0);}} style = {{textDecoration:'underline white'}}>
                                <Circle style = {{textDecoration:'underline #324182'}}>
                                    {
                                        userProfile === 0 ?
                                        ''
                                        :
                                        userProfile[userProfile.length-1].name[(userProfile[userProfile.length-1].name.length)-1]
                                    }
                                </Circle>
                                <ProfileCardContent style = {{textDecoration:'underline white'}}>
                                    {
                                        userProfile === 0?
                                        ''
                                        :
                                        String(userProfile[userProfile.length-1].year) + "기 " +userProfile[userProfile.length-1].name
                                    }
                                </ProfileCardContent>
                            </ProfileCard>
                        </Link>
                    </NavLink>
                    <NavigationList>
                        <NavLinkBox>
                        <Link to={{
                            pathname: `/main`
                        }}>
                            <NavLinkList
                            onClick={() => {setLocation('/main'); setSideExpended(0); setScheduleExpended(0);}}
                            style = {{textDecoration:'underline white'}}
                            >
                                &gt; HOME
                            </NavLinkList>
                        </Link>
                        <NavLinkList onClick={() => scheduleExpend()}>&gt; SCHEDULE</NavLinkList>
                        {scheduleExpended?
                        ''
                        :
                        <NavLinkScheduleBox>
                            <Link to={{
                                pathname: `/main/schedule/output`
                            }}>
                                <NavLinkScheduleList
                                onClick={() => {setLocation('/main/schedule/output'); setSideExpended(0);setScheduleExpended(0);}}
                                style = {{textDecoration:'underline white'}}
                                >
                                    &gt; OUTPUT
                                </NavLinkScheduleList>
                            </Link> 
                            <Link to={{
                                pathname: `/main/schedule/input`
                            }}>
                                <NavLinkScheduleList
                                onClick={() => {setLocation('/main/schedule/input'); setSideExpended(0);setScheduleExpended(0);}}
                                style = {{textDecoration:'underline white'}}
                                >
                                    &gt; INPUT
                                </NavLinkScheduleList>
                            </Link> 
                        </NavLinkScheduleBox>
                        }
                        <Link to={{
                            pathname: `/main/setting`
                        }}>
                            <NavLinkList
                            onClick={() => {setLocation('/main/setting'); setSideExpended(0);setScheduleExpended(0);}}
                            style = {{textDecoration:'underline white'}}
                            >
                                &gt; SETTING
                            </NavLinkList>
                        </Link>
                        </NavLinkBox>
                    </NavigationList>
                    <NavigationFooter>
                        <FooterLink href={'https://www.youtube.com/channel/UCh_LKaXnsbdB9n3ebGsLUEQ'} target={'_blank'} style = {{textDecoration: 'underline white'}}>YOUTUBE</FooterLink>
                        <FooterLink href={'https://www.instagram.com/14fre_t/'} target={'_blank'} style = {{textDecoration: 'underline white'}}>INSTAGRAM</FooterLink>
                    </NavigationFooter>
                </SideBar>
                </SideBarDIV>
                :
                ''
                }
            </Nav>
    );
}

const SideBarDIV = styled.a`
    position:fixed;
`

const SideBarBG = styled.div`
    left:0;
    top:77px;
    position:fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index:15;
`

const ProfileCardContent = styled.a`
    font-size:18px;
    line-height:35px;
`

const ProfileCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 15px;
    padding-left:20px;
    padding-right:25px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    margin-top: 60px;
    padding: 10px;
    border-radius: 0.5rem;
    border: solid 0px black;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
    background-color:white;
    color: black;
`

const FooterLink = styled.a`
    flex-wrap: wrap;
    display: flex;
    margin:5px;
    color:grey;
    font-size:13px;
`

const SideBar = styled.div`
    margin-top: 77px;
    margin-top:;
    right: 0px;
    width: 60%;
    height: 100%;
    position:fixed;
    background-color: #324182;
    z-index:30;
`

const Nav = styled.div`
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    z-index: 20;
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

const NavLinkBox = styled.ul`
    margin-top: -30px;
    padding-left:10px;
    list-style:none;
    font-size: 20px;
`
const NavLinkList = styled.li`
    margin-top: 50px;
    font-weight:bold;
    color: black;
`
const NavLinkScheduleBox = styled.ul`
    padding-left:15px;
    list-style:none;
    font-size: 15px;
`
const NavLinkScheduleList = styled.li`
    margin-top: 5px;
    color: grey;
`

const NavLink = styled.a`
    margin: 5px;
    text-decoration: none;
    color: black;
    color: #222D65;
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
