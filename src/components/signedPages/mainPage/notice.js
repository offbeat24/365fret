import styled from 'styled-components';

function Notice(){
    return(
        <NoticeDIV>
            <Title>NOTICE</Title>
            <BoldLine/>
            <PostDIV>
                <PostTitle>
                    2022 새터 녹음 관련 공지
                </PostTitle>
                <PostDetail>
                    동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이...
                </PostDetail>
                <PostInformation>
                    <PostDate>2022.02.10(목)</PostDate>
                    <PostWritter>31기 김보균</PostWritter>
                </PostInformation>
            </PostDIV>
            <Line/>
            <PostDIV>
                <PostTitle>
                    2021 정기공연 영상 업로드 일정 공지
                </PostTitle>
                <PostDetail>
                    동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이...
                </PostDetail>
                <PostInformation>
                    <PostDate>2021.11.27(토)</PostDate>
                    <PostWritter>31기 이시연</PostWritter>
                </PostInformation>
            </PostDIV>
            <Line/>
            <PostDIV>
                <PostTitle>
                    TITLE
                </PostTitle>
                <PostDetail>
                    detail
                </PostDetail>
                <PostInformation>
                    <PostDate>DATE</PostDate>
                    <PostWritter>WRITTER</PostWritter>
                </PostInformation>
            </PostDIV>
            <Line/>
            <PostDIV>
                <PostTitle>
                    TITLE
                </PostTitle>
                <PostDetail>
                    detail
                </PostDetail>
                <PostInformation>
                    <PostDate>DATE</PostDate>
                    <PostWritter>WRITTER</PostWritter>
                </PostInformation>
            </PostDIV>
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

const BoldLine = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 3px;
`

const Line = styled.hr`
    background-color: #4472C4;
    border: 0px;
    height: 1px;
`

const Title = styled.div`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
`
export default Notice;