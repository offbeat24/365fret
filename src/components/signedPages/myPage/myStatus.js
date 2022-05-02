import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { UserID } from '../../recoil';
import { url } from '../../../modules/Url';
import axios from 'axios';

function MyStatus() {
  const ID = useRecoilValue(UserID);
  const [userEvents, setUserComingEvents] = useState(0);
  const [expanded, setExpanded] = useState(0);

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

  const handleExpand = (key) => {
      key === expanded?
          setExpanded(-1)
          :
          setExpanded(key)
  }

    return (
      <Page>
        {
          userEvents === 0 ?
          'Loading...'
          :
          (
            userEvents.map((event,i) => {
              return (
                <div key={i}>
                  <MyEventDIV onClick={() =>handleExpand(i)}>
                    <EventDefault>
                      <EventTitle>
                        {event.name}
                      </EventTitle>
                      <EventDate>
                        {event.eventdate.slice(0,10)}
                      </EventDate>
                    </EventDefault>
                    <EventDetail>
                      {
                        expanded === i ?
                        '디테일을 적어야해용'
                        :
                        ''
                      }
                    </EventDetail>
                  </MyEventDIV>
                </div>
              )
            })
          )
        }
      </Page>
  );
}

const Page = styled.div`
  margin: 10px;
`

const MyEventDIV = styled.div`
  background-color: #D9EDF8;
  border: solid #D9EDF8 1px;
  border-radius: 0.5rem;
  min-height: 55px;
  margin: 0px;
  margin-top: 20px;
  font-size: 5px;
  padding: 10px;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.1);
`

const EventDefault = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`

const EventTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const EventDate = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  font-size: 15px;
  font-weight: bold;
`

const EventDetail = styled.div`
  font-size: 15px;
`

/*
const MyEventDIV = styled.div`
  background-color: #5E87B5;
  border-radius: 0.5rem;
  border: solid #222565 1px;
  height: 60px;
  margin: 5px;
  padding: 10px;
`
*/

export default MyStatus;
