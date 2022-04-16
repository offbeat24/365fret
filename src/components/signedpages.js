import Main from "./signedPages/mainPage/mainPage";
import styled from 'styled-components';

function SignedPages(){
    return (
        <PageRender>
            <RenderBoxStyle>
                <Main />
            </RenderBoxStyle>
        </PageRender>
    );
}

// const Circle1 = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 16.5px;
//   z-index: 5;
//   margin: 0px;
//   width: 35px;
//   height: 35px;
//   background-color: #4472C4;
//   border-radius: 50%;
//   text-align: center;
//   line-height: 35px;
//   font-weight: bold;
//   font-size: 15px;
// `
// const Circle2 = styled.div`
//   position: absolute;
//   top: 55px;
//   right: 16.5px;
//   z-index: 5;
//   margin: 0px;
//   width: 35px;
//   height: 35px;
//   background-color: #4472C4;
//   border-radius: 50%;
//   text-align: center;
//   line-height: 35px;
//   font-weight: bold;
//   font-size: 15px;
// `

// const TestDIV = styled.div`
//     z-index: 11;
//     position: absolute;
//     top: 60px;
//     right: 103px;
//     height: 100px;
//     width: 70px;
//     border: solid #4472C4 1px;
//     border-top: 0px;
//     background-color: white;
// `

// const Header = styled.div`
//     z-index: 10;
//     background-color: #FFFFFF;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
// `

// const Body = styled.div`
//     //padding-top: 55px;
// `

// const BoldLine = styled.hr`
//     background-color: #4472C4;
//     border: 0px;
//     height: 2px;
//     margin-bottom:-1px;
// `

const PageRender = styled.div`
    margin:10px;
`

const RenderBoxStyle = styled.div`
    min-height: 500px;
`


export default SignedPages;
