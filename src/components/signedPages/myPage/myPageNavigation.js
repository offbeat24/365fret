import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';


function MyPageNavigation({ setFlag }){
    const clickIcon = (num) => {
        setFlag(num);
    };
    return(
        <Nav>
            <CssBaseline/>
            <NavLinkBox>
                <NavBtnTxt onClick={() => clickIcon(0)}>Status</NavBtnTxt>
                <NavBtnTxt onClick={() => clickIcon(1)}>Scheduler</NavBtnTxt>
                <NavBtnTxt onClick={() => clickIcon(2)}>Visitor</NavBtnTxt>
            </NavLinkBox>
        </Nav>
    );
}

const Nav = styled.div`
    height: 20px;
    display: flex;
    justify-content: space-between;
`

const NavLinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`

const NavBtnTxt = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin-right: 12px;    
`

export default MyPageNavigation;