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
  margin-top: 40px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #DAE3F3;
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