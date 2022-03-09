import styled from 'styled-components';
import MyNotice from "./myNotice";
import Notice from "./notice";

function Main() {
  return (
    <Page>
        <MyNoticeDIV><MyNotice /></MyNoticeDIV>
        <NoticeDIV><Notice /></NoticeDIV>
    </Page>
);
}

const Page = styled.div`
`
const MyNoticeDIV = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #D9EDF8;
  border-radius: 0.5rem;
  height: 130px;
`

const NoticeDIV = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  min-height: 500px;
`

export default Main;