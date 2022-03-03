import {Link} from "react-router-dom";
import Main from './Main.png';
import Scheduler from './Scheduler.png';
import Setting from './Setting.png';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';

function Navigation(){
    return(
        <Nav>
            <CssBaseline/>
            <Logo>365fret</Logo>
            <NavLinkBox>
                <NavBtnImg src={Main}/>
                <NavBtnImg src={Scheduler}/>
                <NavBtnImg src={Setting}/>
                {/* <NavLink>
                    <Link to={{pathname: `/main`}}>Main</Link>
                </NavLink>
                <NavLink>
                    <Link to={{pathname: `/scheduler`}}>Scheduler</Link>
                </NavLink>
                <NavLink>
                    <Link to={{pathname: `/setting`}}>Setting</Link>
                </NavLink> */}
                <NavLink>
                    <Circle>JH</Circle>
                </NavLink>
            </NavLinkBox>
        </Nav>
    );
}

const Nav = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-bottom-color: #4472C4;
    border-bottom-style: solid;
    border-bottom-width: 1px;
`

const Logo = styled.a`
    display: flex;
    align-items:center;
    font-size: 30px;
    margin: 0px;
    text-decoration: none;
    color: black;
    font-weight: bold;
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

const NavBtnImg = styled.img`
    width: 30px;
    height: 30px;
    margin: 7px;
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