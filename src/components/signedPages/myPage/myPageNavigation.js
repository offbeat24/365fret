import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';


function MyPageNavigation({ flag, setFlag }){
    const clickIcon = (num) => {
        setFlag(num);
    };
    return(
        <Nav>
            <CssBaseline/>
            <NavBtn1 flag = {flag} onClick={() => clickIcon(0)}>
                Status
            </NavBtn1>
            <NavBtn2 flag = {flag} onClick={() => clickIcon(1)}>
                History
            </NavBtn2>
            <NavBtn3 flag = {flag} onClick={() => clickIcon(2)}>
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
    margin-bottom: -15px;
    font-size: 15px;
    font-weight: bold;
    width: 80px;
    text-align: center;
    border-bottom: ${ props => `${ props.flag === 0 ? 'solid #4472C4 3.5px' : '' }`};
`

const NavBtn2 = styled.div`
    margin-bottom: -15px;
    font-size: 15px;
    font-weight: bold;
    width: 80px;
    text-align: center;
    border-bottom: ${ props => `${ props.flag === 1 ? 'solid #4472C4 3.5px' : '' }`};
`

const NavBtn3 = styled.div`
    margin-bottom: -15px;
    font-size: 15px;
    font-weight: bold;
    width: 80px;
    text-align: center;
    border-bottom: ${ props => `${ props.flag === 2 ? 'solid #4472C4 3.5px' : '' }`};
`

export default MyPageNavigation;
