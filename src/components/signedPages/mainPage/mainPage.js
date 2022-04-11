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
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #D9EDF8;
  border-radius: 0.5rem;
  height: 130px;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.1);
`

const NoticeDIV = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  min-height: 500px;
`

export default Main;