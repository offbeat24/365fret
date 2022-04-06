import axios from "axios";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { url } from '../../../modules/Url';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function OutputPage(){
    const [events, setEvents] = useState(0);
    const [eventsReformed, setEventsReformed] = useState(0);
    const [expanded, setExpanded] = useState(0);

    const handleExpand = (key) => {
        key === expanded?
            setExpanded(-1)
            :
            setExpanded(key)
    }
    
    useEffect(() =>{
        const getEvents = async () => {
            await axios.get(
                `${url}/getEvents`
            ).then(response =>{
                response.data.result.map(c => Object.assign(c, { flag: false }))
                setEvents(response.data.result)
                let eventsReformed = [];
                response.data.result.forEach(c=>{
                    let event = {
                        title: c.name,
                        color: '#1e1e1e'
                    }
                    if (c.startdate){
                        event.start = c.startdate.slice(0,10)  
                        //startdate가 있는 경우 event의 start를 startdate로 설정
                        if(c.enddate){
                            event.end = c.enddate.slice(0,10)  
                            //startdate가 있고, enddate가 있는 경우 event의 end를 enddate로 설정
                        }else if(c.eventdate){
                            event.end = c.eventdate.slice(0,10)
                            //startdate가 있는데 enddate가 없으면서 eventdate가 있는 경우 event의 end를 eventdate로 설정
                        }
                    }else if(c.enddate){
                        event.date = c.enddate.slice(0,10) 
                        //startdate가 없는데 enddate가 있는 경우 event의 date를 enddate로 설정
                    }else if(c.eventdate){
                        event.date = c.eventdate.slice(0,10)
                        //startdate가 없는데 eventdate가 있는 경우 event의 date를 eventdate로 설정
                    }
                    eventsReformed.push(event)
                })
                setEventsReformed(eventsReformed)
            })
        }
        getEvents();
    }, [])

    return (
        <Page>
        {
            eventsReformed === 0
            ?
                'Loading...'
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
        {
          events === 0
          ?
            'Loading...'
          :
            (
              events.map((event,i) => {
                return (
                  <div key = {i}>
                    <OutputEventDIV onClick={() => handleExpand(i)}>
                        <OutputEventTitle>
                            {event.name}
                        </OutputEventTitle>
                        <OutputEventDetail>
                            {
                                expanded === i ?
                                (event.eventplace?
                                '\n장소: ' + event.eventplace
                                :
                                ''
                                )
                                +
                                (event.startdate?
                                '\n시작날짜: ' + event.startdate.slice(0,10)
                                +
                                '\n시작시간: ' + event.startdate.slice(11,19)
                                :
                                ''
                                )
                                +
                                (event.enddate?
                                '\n끝날짜: ' + event.enddate.slice(0,10)
                                +
                                '\n끝시간: ' + event.enddate.slice(11,19)
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
                            {event.eventdate?
                            '이벤트 날짜: ' + event.eventdate.slice(0,10)
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
`

const OutputList = styled.div`
`

const OutputEventDIV = styled.div`
  background-color: #D9EDF8;
  border: solid #5E87B5 2px;
  border-radius: 0.5rem;
  min-height: 55px;
  margin: 0px;
  margin-top: 10px;
  font-size: 5px;
  padding: 10px;
`

const OutputEventTitle = styled.a`
  font-size: 20px;
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
  font-size: 15px;
`

const CalendarDIV = styled.div`
    height: 428px;
    flex-grow: 1;
    margin-top: 30px;
`

export default OutputPage;