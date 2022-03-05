import styled from 'styled-components';

function myStatus() {
  return (
    <Page>
        <MyEventDIV>2022 새터</MyEventDIV>
        <MyNotEventDIV>2022 가두공연</MyNotEventDIV>
    </Page>
);
}

const Page = styled.div`
  margin: 10px;
`

const MyNotEventDIV = styled.div`
  background-color: #D9EDF8;
  border-color: #5E87B5;
  border-radius: 0.5rem;
  border-style: solid;
  height: 60px;
  margin: 5px;
  padding: 10px;
`
const MyEventDIV = styled.div`
  background-color: #5E87B5;
  border-color: #222565;
  border-radius: 0.5rem;
  border-style: solid;
  height: 60px;
  margin: 5px;
  padding: 10px;
`


export default myStatus;