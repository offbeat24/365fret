import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';


function Navigation({ setFlag }){
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