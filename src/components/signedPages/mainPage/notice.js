import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yyyymmddday } from '../../../modules/timeMaker';
import { url } from '../../../modules/Url';

function Notice() {
    const [notices, setNotices] = useState([]);

    const getNotice = async () => {
        await axios.get(
            `${url}/getNotices`
        ).then(response => {
            setNotices(response.data.result.map(c => Object.assign(c, {flag:false})))
        })
    }
    useEffect(() => getNotice(), [])

    return(
        <NoticeDIV>
            <Title>NOTICE</Title>
            <BoldLine />
            {
                notices.map((notice,i) => {
                    return (
                        <div key={i}>
                            <PostDIV >
                                <PostTitle>
                                    {notice.title}
                                </PostTitle>
                                <PostDetail>
                                    {
                                        notice.detail < 50 ?
                                            notice.detail
                                            :
                                            notice.detail.substr(0, 50) + '...'
                                    }
                                </PostDetail>
                                <PostInformation>
                                    <PostDate>{yyyymmddday(notice.post_date)}</PostDate>
                                    <PostWritter>{notice.year}기 {notice.name}</PostWritter>
                                </PostInformation>
                            </PostDIV>
                            <Line/>
                        </div>
                    )
                })
            }
        </NoticeDIV>
    );
}

const NoticeDIV = styled.div`
`

const PostDIV = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 5px;
`

const PostTitle = styled.div`
    margin: 3px;
    font-size: 20px;
    font-weight: bold;
`

const PostDetail = styled.div`
    margin-top: 5px;
    color: #959595;
    margin: 5px;
    font-size: 13px;
    height:40px;
`

const PostInformation = styled.div`
    margin: 10px;
    display: flex;
    margin: 3px;
    justify-content: space-between;
`

const PostDate = styled.div`
    width: 170px;
    font-size: 16px;
`

const PostWritter = styled.div`
    font-size: 18px;
    text-align:right;
    width: 170px;
    font-weight: bold;
`


const Line = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 1px;
`
const BoldLine = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 3px;
`

const Title = styled.div`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
`
export default Notice;
