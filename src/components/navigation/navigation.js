import Main from './Main.png';
import Scheduler from './Scheduler.png';
import Setting from './Setting.png';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';

function Navigation({ setFlag }){
    const clickIcon = (num) => {
        setFlag(num);
    };
    return(
        <Nav>
            <CssBaseline/>
              <Logo onClick={() => clickIcon(1)}>365fret</Logo>
            <NavLinkBox>
                <NavBtnImg onClick={() => clickIcon(1)} src={Main}/>
                <NavBtnImg onClick={() => clickIcon(2)} src={Scheduler}/>
                <NavBtnImg onClick={() => clickIcon(3)} src={Setting}/>
                <NavLink>
                    <Circle onClick={() => clickIcon(4)}>JH</Circle>
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