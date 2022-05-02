import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserID } from '../../recoil';
import { useRecoilValue } from 'recoil';
import { url } from '../../../modules/Url';

function MyNotice(){
    const ID = useRecoilValue(UserID);
    const [userComingEvents, setUserComingEvents] = useState(0);
    const today = useState(new Date());
    const currDay = 24 * 60 * 60 * 1000;

    useEffect(() => {
        const getUserComingEvents = async () => {
            await axios.post(
                `${url}/getUserComingEvents`,
                { userID: ID },
            ).then(response => {
                setUserComingEvents(response.data)
            })
        };
        getUserComingEvents();
    }, [ ID ]);
    
    const getDateOBJ = (dateString) => {    //YYYY-MM-DDTHH:MM:SS.SSSZ e.g. 2023-02-22T15:00:00.000Z
        return new Date(dateString)
    }

    return(
        <MyNoticeDIV>
            <CurrentEventDIV>
                <CurrentEventInform>
                {
                    userComingEvents === 0?
                    "Loading..."
                    :
                    (
                        userComingEvents.length === 0 ?
                        "참여 중인 이벤트가 없습니다."
                        :
                        (
                            (parseInt((getDateOBJ(userComingEvents[0].eventdate) - today[0])/currDay)) === 0?
                            "오늘은 '" + userComingEvents[0].name + "'입니다."
                            :
                            "'" + userComingEvents[0].name + "'까지 " +
                            (parseInt((getDateOBJ(userComingEvents[0].eventdate) - today[0])/currDay))
                            + "일 남았습니다."
                        )
                    )
                }
                </CurrentEventInform>
            </CurrentEventDIV>
            <MyEventBoxDIV>
                {
                    userComingEvents === 0?
                    ""
                    :
                    (
                        userComingEvents.slice(1,4).map((event,i) => {
                            return (
                                <div key={i}>
                                    <MyEventDIV>
                                        <MyEventName>{event.name}</MyEventName>
                                        <MyEventPlace>{event.eventplace}</MyEventPlace>
                                        <MyEventDueDate>
                                        D-{parseInt((getDateOBJ(event.eventdate) - today[0])/currDay)}
                                        </MyEventDueDate>
                                    </MyEventDIV>
                                </div>
                            )
                        })
                    )
                }
            </MyEventBoxDIV>
        </MyNoticeDIV>
    );
}

const MyNoticeDIV = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
`

const CurrentEventDIV = styled.div`
    align-items:center;
    margin-top: 10px;
    margin-bottom:5px;
`

const CurrentEventInform = styled.div`
    text-align:center;
    font-size: 19px;
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
    text-align:left;
    min-width:140px;
`

const MyEventPlace = styled.div`
    text-align:left;
    min-width:100px;
`

const MyEventDueDate = styled.div`
    text-align:right;
    min-width:50px;
`

export default MyNotice;
