import styled from 'styled-components';

function MyNotice(){
    return(
        <MyNoticeDIV>
            <CurrentEventDIV>
                <CurrentEventInform>오늘은 '2022 새터' 합주일입니다.</CurrentEventInform>
            </CurrentEventDIV>
            <MyEventBoxDIV>
                <MyEventDIV>
                    <MyEventName>2022 새로 배움터</MyEventName>
                    <MyEventPlace>도쿄돔</MyEventPlace>
                    <MyEventDueDate>D-2</MyEventDueDate>
                </MyEventDIV>
                <MyEventDIV>
                    <MyEventName>2023 월계축전</MyEventName>
                    <MyEventPlace>올림픽경기장</MyEventPlace>
                    <MyEventDueDate>D-131</MyEventDueDate>
                </MyEventDIV>
                <MyEventDIV>
                    <MyEventName>2023 정기공연</MyEventName>
                    <MyEventPlace>오페라하우스</MyEventPlace>
                    <MyEventDueDate>D-225</MyEventDueDate>
                </MyEventDIV>
            </MyEventBoxDIV>
        </MyNoticeDIV>
    );
}

const MyNoticeDIV = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const CurrentEventDIV = styled.div`
    align-items:center;
    margin-top: 10px;
    margin-bottom:5px;
`

const CurrentEventInform = styled.div`
    text-align:center;
    font-size: 21px;
    color: #222D65;
    font-weight:bold;
`

const MyEventBoxDIV = styled.div`
    justify-content: space-between;
    align-items:center;
`
const MyEventDIV = styled.div`
    justify-content: space-between;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top:3px;
    font-size: 14px;
    min-width:330px;
`

const MyEventName = styled.div`
    color: #959595;
    text-align:left;
    min-width:140px;
`

const MyEventPlace = styled.div`
    color: #959595;
    text-align:left;
    min-width:100px;
`

const MyEventDueDate = styled.div`
    color: #959595;
    text-align:right;
    min-width:50px;
`

export default MyNotice;
