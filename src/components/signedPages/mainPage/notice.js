import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yyyymmddday } from '../../../modules/timeMaker';
import { url } from '../../../modules/Url';

function Notice() {
    const [notices, setNotices] = useState([]);
    const [expanded, setExpanded] = useState(-1);

    useEffect(() => {
        const getData = async () => {
            await axios.get(
                `${url}/getNotices`
            ).then(response => {
                response.data.result.map(c => Object.assign(c, { flag: false }))
                setNotices(response.data.result)
            })
        }
        getData();
    }, [])

    const handleExpand = (key) => {
        key === expanded?
            setExpanded(-1)
            :
            setExpanded(key)
    }

    return (
        <NoticeDIV>
        <br/>
            <Line />
            {
                notices.map((notice, i) => {
                    return (
                        <div key={i}>
                            <PostDIV onClick={() =>handleExpand(i)}>
                                <PostTitle>
                                    {notice.title}
                                </PostTitle>

                                <PostDetail>
                                    {
                                        expanded === i ?
                                            notice.detail
                                            :
                                            ''
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
        <br/>
        </NoticeDIV>
    );
}

const NoticeDIV = styled.div`
`

const PostDIV = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0.5rem;
    font-size: 5px;
    overflow: auto;
`

const PostTitle = styled.div`
    margin: 3px;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #222D65;
`

const PostDetail = styled.div`
    word-wrap: break-word;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
    color: #000000;
    font-size: 13px;
    min-height:0px;
`

const PostInformation = styled.div`
    display: flex;
    margin: 3px;
    margin-bottom: 10px;
    justify-content: space-between;
`

const PostDate = styled.div`
    width: 170px;
    margin-bottom: -10px;
    margin-left: 15px;
    font-size: 13px;
    color: #222D65;
`

const PostWritter = styled.div`
    font-size: 13px;
    margin-right: 15px;
    text-align:right;
    width: 170px;
    font-weight: bold;
    color: #222D65;
`

const Line = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 2px;
`

// const BoldLine = styled.hr`
//     background-color: #4472C4;
//     border: 0px;
//     height: 3px;
//     margin-left:-20px;
//     margin-right:-20px;
// `

// const Title = styled.div`
//     color: #222D65;
//     padding-left:20px;
//     margin-top: 10px;
//     font-size: 25px;
//     font-weight: bold;
//     padding-left:20px;
// `

export default Notice;
