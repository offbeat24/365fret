import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';


function MyPageNavigation({ setFlag }){
    const clickIcon = (num) => {
        setFlag(num);
    };
    return(
        <Nav>
            <CssBaseline/>
            <NavBtn1 onClick={() => clickIcon(0)}>
                Status
            </NavBtn1>
            <NavBtn2 onClick={() => clickIcon(1)}>
                Scheduler
            </NavBtn2>
            <NavBtn3 onClick={() => clickIcon(2)}>
                Visitor
            </NavBtn3>
        </Nav>
    );
}

const Nav = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavBtn1 = styled.div`
    font-size: 15px;
    font-weight: bold;
    width: 70px;
    text-align: left;
`

const NavBtn2 = styled.div`
    font-size: 15px;
    font-weight: bold;
    width: 70px;
    text-align: center;
`

const NavBtn3 = styled.div`
    font-size: 15px;
    font-weight: bold;
    width: 70px;
    text-align: right;
`

export default MyPageNavigation;