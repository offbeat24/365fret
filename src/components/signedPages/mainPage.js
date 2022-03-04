import { url } from '../../modules/Url'
import axios from 'axios'
import styled from 'styled-components';
import { useState } from 'react';

const getEvents = async () => {
  try {
    const response = await axios.get(
      `${url}/getEvents`
    );
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}

const addEvent = async () => {
  try {
    const response = await axios.put(
      `${url}/addEvent`,
      [
        1,
        "테스트합주",
        "1900-00-00 00:00:01",
        "1901-00-00 00:00:01",
        "1902-00-00 00:00:01"
      ]
    );
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}



function Main() {
  const [eventKey, setEventKey] = useState(-1)

  const deleteEvent = async () => {
    //console.log(eventKey)
    try {
      const response = await axios.post(
        `${url}/deleteEvent`,
        {
          key: eventKey
        }
      );
      console.log(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <RenderBox>
      MainPage<br/>
      <button onClick={getEvents}>
        getEvents
      </button><br/>
      <button onClick={addEvent}>
        addEvents
      </button><br/>
      <input
        onChange={(e) => setEventKey(e.target.value)}
        placeholder='지울 이벤트 key 입력'
        /><br/>
      <button onClick={deleteEvent}>
        deleteEvent
      </button>
    </RenderBox>
  )
}

const RenderBox = styled.div`
  margin: 10px;
`

export default Main;
