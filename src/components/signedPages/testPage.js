import { url } from '../../modules/Url'
import axios from 'axios'
import styled from 'styled-components';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {UserID} from '../recoil';

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
        "1902-00-00 00:00:01",
        "온라인"
      ]
    );
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}



function Test() {
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

  const setID = useSetRecoilState(UserID);
  const [wantID, setWantID] = useState(1);
  const changeUserID = () => {
    setID(parseInt(wantID));
    console.log(`Log-In ID: ${wantID}`);
  }

  return (
    <RenderBox>
      DB접근 테스트페이지<br/>
      <button onClick={getEvents}>
        getEvents
      </button><br/><br/>
      <button onClick={addEvent}>
        addEvents
      </button><br/><br/>
      <input
        onChange={(e) => setEventKey(e.target.value)}
        placeholder='지울 이벤트 key 입력'
        />
      <button onClick={deleteEvent}>
        deleteEvent
      </button><br/><br/>
      <input
        onChange={(e) => setWantID(e.target.value)}
        placeholder='user ID 입력'
      />
      <button onClick={changeUserID}>
          testButtonToMainPage
      </button>
    </RenderBox>
  )

}

const RenderBox = styled.div`
  margin: 10px;
`

export default Test;
