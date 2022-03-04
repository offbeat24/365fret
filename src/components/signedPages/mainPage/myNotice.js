import styled from 'styled-components';

function MyNotice(){
    return(
        <MyNoticeDIV>
            <CurrentEventDIV>MyNotice</CurrentEventDIV>
        </MyNoticeDIV>
    );
}

const MyNoticeDIV = styled.div`
`

const CurrentEventDIV = styled.div`
    margin: 10px;
    text-align:center;
`

export default MyNotice;