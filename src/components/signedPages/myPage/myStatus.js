import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { UserID } from '../../recoil';
import { url } from '../../../modules/Url';
import axios from 'axios';

function MyStatus() {
  const ID = useRecoilValue(UserID);
  const [userEvents, setUserEvents] = useState(0);

  useEffect(() => {
      const getUserEvents = async () => {
          await axios.post(
              `${url}/getUserEvents`,
              { userID: ID },
          ).then(response => {
              setUserEvents(response.data)
          })
      };
      getUserEvents();
  }, [ ID ]);

    return (
      <Page>
        {
          userEvents === 0 ?
          ''
          :
          (
            userEvents.map((event,i) => {
              return (
                <div key={i}>
                  <MyNotEventDIV>{event.name}</MyNotEventDIV>
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

const MyNotEventDIV = styled.div`
  background-color: #D9EDF8;
  border: solid #5E87B5 2px;
  border-radius: 0.5rem;
  height: 60px;
  margin: 5px;
  padding: 10px;
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