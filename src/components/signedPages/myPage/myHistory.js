import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { UserID } from '../../recoil';
import { url } from '../../../modules/Url';
import axios from 'axios';

function MyHistory() {
  const ID = useRecoilValue(UserID);
  const [userPassedEvents, setUserPassedEvents] = useState(0);

  useEffect(() => {
      const getUserPassedEvents = async () => {
          await axios.post(
              `${url}/getUserPassedEvents`,
              { userID: ID },
          ).then(response => {
              setUserPassedEvents(response.data)
          })
      };
      getUserPassedEvents();
  }, [ ID ]);


    return (
      <MyHistoryDIV>
        <HistoryMsgDIV>
          <HistoryMsg>
            {
              userPassedEvents === 0 ?
              "Loading..."
              :
              (
                userPassedEvents.length === 0 ?
                "참여한 공연이 없습니다."
                :
                "공연에 " + userPassedEvents.length + "회 참여하셨군요!"
              )
            }
          </HistoryMsg>
        </HistoryMsgDIV>
        <MyHistoryBoxDIV>
          {
            userPassedEvents === 0 ?
            ""
            :
            (
              userPassedEvents.map((event, i) => {
                return (
                  <div key={i}>
                    <HistoryDIV>
                      <HistoryName>{event.name}</HistoryName>
                      <HistoryPlace>{event.eventplace}</HistoryPlace>
                      <HistoryDate>{event.eventdate.slice(0,10)}</HistoryDate>
                    </HistoryDIV>
                  </div>
                )
              })
            )
          }
        </MyHistoryBoxDIV>
      </MyHistoryDIV>
  );
}

const MyHistoryDIV = styled.div`
    margin: 20px;
    margin-top: 30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 10px;
    background-color: #D9EDF8;
    border-radius: 0.5rem;
    min-height: 100px;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
`

const HistoryMsgDIV = styled.div`
    align-items:center;
    margin-bottom:5px;
`

const HistoryMsg = styled.div`
    text-align:center;
    font-size: 21px;
    color: #222D65;
    font-weight:bold;
`

const MyHistoryBoxDIV = styled.div`
    justify-content: space-between;
    align-items:center;
`
const HistoryDIV = styled.div`
    justify-content: space-between;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top:3px;
    font-size: 14px;
    min-width:330px;
`

const HistoryName = styled.div`
    text-align:left;
    min-width:140px;
`

const HistoryPlace = styled.div`
    text-align:left;
    min-width:100px;
`

const HistoryDate = styled.div`
    text-align:right;
    min-width:50px;
`



export default MyHistory;