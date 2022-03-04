import styled from 'styled-components';
import MyNotice from "./myNotice";
import Notice from "./notice";

function Main() {
  return (
    <Page>
        <br/>
        <MyNoticeDIV><MyNotice /></MyNoticeDIV>
        <br/>
        <NoticeDIV><Notice /></NoticeDIV>
    </Page>
);
}

const Page = styled.div`
`
const MyNoticeDIV = styled.div`
  background-color: #D9EDF8;
  border-radius: 8%;
  height: 130px;
`

const NoticeDIV = styled.div`
  min-height: 500px;
`

export default Main;