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
    text-align:center;
`

export default MyNotice;