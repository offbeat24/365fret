import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserID } from '../../recoil';
import { useRecoilValue } from 'recoil';
import { url } from '../../../modules/Url';

function MyNotice(){
    const ID = useRecoilValue(UserID);
    const [userEvents, setUserComingEvents] = useState(0);
    const today = useState(new Date());

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

    return(
        <MyNoticeDIV>
            <CurrentEventDIV>
                <CurrentEventInform>
                {
                    userEvents === 0?
                    "Loading..."
                    :
                    (
                        userEvents.length === 0 ?
                        "참여 중인 이벤트가 없습니다."
                        :
                        (
                            (parseInt(userEvents[0].eventdate.slice(8,10)) - today[0].getDate()) === 0?
                            "오늘은 '" + userEvents[0].name + "'입니다."
                            :
                            "'" + userEvents[0].name + "'가 " +
                            (parseInt(userEvents[0].eventdate.slice(8,10)) - today[0].getDate())
                            + "일 남았습니다."
                        )
                    )
                }
                </CurrentEventInform>
            </CurrentEventDIV>
            <MyEventBoxDIV>
                {
                    userEvents === 0?
                    ""
                    :
                    (
                        userEvents.slice(1,4).map((event,i) => {
                            return (
                                <div key={i}>
                                    <MyEventDIV>
                                        <MyEventName>{event.name}</MyEventName>
                                        <MyEventPlace>{event.eventplace}</MyEventPlace>
                                        <MyEventDueDate>
                                        D-{parseInt(event.eventdate.slice(8,10)) - today[0].getDate()}
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
