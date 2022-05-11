import ListFilter from './ListFilter.png';
import axios from "axios";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { url } from '../../../modules/Url';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function OutputPage(){
    const [eventsReformed, setEventsReformed] = useState([]);
    const [expanded, setExpanded] = useState(-1);
    const [filterExpanded, setFilterExpanded] = useState(0);
    const [passedEventsFilter, setPassedEventsFilter] = useState(1);
    const [showingEvents, setShowingEvents] = useState(0);
    const today = useState(new Date());
    const currDay = 24 * 60 * 60 * 1000;
    
    const getDateOBJ = (dateString) => {    //YYYY-MM-DDTHH:MM:SS.SSSZ e.g. 2023-02-22T15:00:00.000Z
        return new Date(dateString)
    }

    const handleExpand = (key) => {
        key === expanded?
            setExpanded(-1)
            :
            setExpanded(key)
    }
    const handleFilterExpanded = () => {
        setFilterExpanded(prev => !prev);
    }

    useEffect(() =>{
        const getEvents = async () => {
            await axios.get(
                `${url}/getEvents`
            ).then(response =>{
                response.data.result.map(c => Object.assign(c, { flag: false }))
                let eventsReformed = [];
                response.data.result.forEach(c=>{
                    let event = {//title,color,start,end,date,time,type
                        title: c.name,
                        color: '#1e1e1e',
                        type: c.type,
                        place: c.eventplace
                    }
                    if (c.startdate){
                        event.start = c.startdate
                        //startdate가 있는 경우 event의 start를 startdate로 설정
                        if(c.enddate){
                            event.end = c.enddate
                            //startdate가 있고, enddate가 있는 경우 event의 end를 enddate로 설정
                        }else if(c.eventdate){
                            event.end = c.eventdate
                            //startdate가 있는데 enddate가 없으면서 eventdate가 있는 경우 event의 end를 eventdate로 설정
                        }
                    }else if(c.enddate){
                        event.date = c.enddate
                        //startdate가 없는데 enddate가 있는 경우 event의 date를 enddate로 설정
                    }else if(c.eventdate){
                        event.date = c.eventdate
                        //startdate가 없는데 eventdate가 있는 경우 event의 date를 eventdate로 설정
                    }
                    eventsReformed.push(event)
                })
                setEventsReformed(eventsReformed);
                setShowingEvents(eventsReformed);
            })
        }
        getEvents();
    }, [])

    const onChangePassedEventsFilter = () => {
        setPassedEventsFilter(prev => !prev);
    }

    const filterShowingEvents = () => {
        if(passedEventsFilter){
            setShowingEvents(eventsReformed);
        }
        else{
            let tempEvents = [];
            eventsReformed.forEach(c =>{
                if (parseInt((getDateOBJ(c.eventdate))-today[0])/currDay >= 0){
                    tempEvents.push(c);
                }
            })
            setShowingEvents(tempEvents);
        }
    }

    useEffect(filterShowingEvents,[passedEventsFilter])

    return (
        <Page>
        {
            eventsReformed === []
            ?
                ''
            :
                (
                    <CalendarDIV>
                        <FullCalendar
                            plugins={[ dayGridPlugin ]}
                            headerToolbar={{
                            left: 'prev',
                            center: 'title',
                            right: 'next'
                            }}
                            titleFormat={{
                                month: 'numeric',
                                year: 'numeric'
                            }}
                            initialView="dayGridMonth"
                            weekends={true}
                            events={eventsReformed}
                            height={428}
                            fixedWeekCount={false}
                            expandRows={true}
                        />
                    </CalendarDIV>
                )

        }
            <OutputList>
            <ListHeader>
                <ListTitle>LIST</ListTitle>
                <ListFilterIcon onClick={()=>handleFilterExpanded()} src={ListFilter}/>
                {filterExpanded?
                <ListFilterList>
                    <ListFilterItem>
                        <ListFilterDetail>지난 이벤트 보기</ListFilterDetail>
                        <ListFilterCheck type="checkbox" checked={passedEventsFilter} onChange={() => onChangePassedEventsFilter()}/>
                    </ListFilterItem>
                    <ListFilterItem>
                        <ListFilterDetail>참여 이벤트</ListFilterDetail>
                        <ListFilterCheck type="checkbox"/>
                    </ListFilterItem>
                    <ListFilterItem>
                        <ListFilterDetail>eventType:1</ListFilterDetail>
                        <ListFilterCheck type="checkbox"/>
                    </ListFilterItem>
                    <ListFilterItem>
                        <ListFilterDetail>eventType:2</ListFilterDetail>
                        <ListFilterCheck type="checkbox"/>
                    </ListFilterItem>
                </ListFilterList>
                :
                ""
                }
            </ListHeader>
        {
          eventsReformed === []
          ?
            'Loading...'
          :
            (
              eventsReformed.map((event,i) => {
                return (
                  <div key = {i}>
                    <OutputEventDIV onClick={() => handleExpand(i)}>
                        <OutputEventTitle>
                            {event.title}
                        </OutputEventTitle>
                        <OutputEventDetail>
                            {
                                expanded === i ?
                                (event.place?
                                '\n장소: ' + event.place
                                :
                                ''
                                )
                                +
                                (event.start?
                                '\n시작날짜: ' + event.start.slice(0,10)
                                +
                                '\n시작시간: ' + event.start.slice(11,19)
                                :
                                ''
                                )
                                +
                                (event.end?
                                '\n끝날짜: ' + event.end.slice(0,10)
                                +
                                '\n끝시간: ' + event.end.slice(11,19)
                                :
                                ''
                                )
                                +
                                (event.type?
                                '\n이벤트타입: ' + event.type
                                :
                                ''
                                )
                                :
                                ''
                            }
                        </OutputEventDetail>
                        <OutputEventDate>
                            {event.date?
                            '이벤트 날짜: ' + event.date.slice(0,10)
                            :
                            ''}
                        </OutputEventDate>
                    </OutputEventDIV>
                  </div>
                )
              })
            )
        }
        </OutputList>
        </Page>
    );
}

const Page = styled.div`
  margin: 10px;
  z-index:1;
`

const ListHeader = styled.div`
    padding:10px;
    overflow:hidden;
    clear:both;
    margin-bottom:-10px;
`

const ListTitle = styled.div`
    font-size:20px;
    font-weight:bold;
    float:left;
`

const ListFilterIcon = styled.img`
    margin-top:5px;
    width:20px;
    float:right;
`

const ListFilterList = styled.div`
    flex-wrap:wrap;
    display:flex;
    clear:both;
    margin-top:5px;
    margin-bottom:-10px;
    padding-left:-3px;
    padding-right:-3px;
`

const ListFilterItem = styled.div`
    background-color: #D9EDF8;
    border: solid #D9EDF8 1px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.1);
    width: 150px;
    clear:both;
    overflow:hidden;
    margin-left:3px;
    margin-right:3px;
    margin-bottom:5px;
    padding-left:3px;
    padding-right:3px;
`

const ListFilterDetail = styled.div`
    float:left;
    padding-left:5px;
    font-size:13px;
    padding-top:1px;
`

const ListFilterCheck = styled.input`
    margin-top: 5px;
    font-size:20px;
    float:right;
    padding-right:5px;
`

const OutputList = styled.div`
    background-color: #D9EDF8;
    border: solid #D9EDF8 1px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.1);
    min-height: 10px;
    padding: 10px;
    padding-top:0px;
    margin-top:10px;
`

const OutputEventDIV = styled.div`
    background-color: #D9EDF8;
    border: solid #D9EDF8 1px;
    border-radius: 0.5rem;
    min-height: 55px;
    margin-top: 10px;
    font-size: 5px;
    padding: 10px;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.1);
`

const OutputEventTitle = styled.a`
    font-size: 18px;
    font-weight: bold;
`

const OutputEventDate = styled.a`
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-size: 15px;
    font-weight: bold;
`

const OutputEventDetail = styled.a`
    margin-top: 5px;
    margin-bottom: 5px;
    white-space: pre-wrap;
    font-size: 13px;
    font-weight: light;
`

const CalendarDIV = styled.div`
    padding: 10px;
    min-height: 448px;
    flex-grow: 1;
    z-index: 30;
`

export default OutputPage;