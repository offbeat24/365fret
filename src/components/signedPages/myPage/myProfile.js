import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useRecoilValue } from 'recoil';
import UserID from '../../recoil/userID';
import { url } from '../../../modules/Url';

function MyProfile() {
    const ID = useRecoilValue(UserID);
    const [userProfile, setUserProfile] = useState(0);
    useEffect(() => {
        const getUserProfile = async () => {
            await axios.post(
                `${url}/getUserProfile`,
                { userID: ID },
            ).then(response => {
                setUserProfile(response.data)
            })
        };
        getUserProfile();
    }, [ ID ]);
    console.log(userProfile);
    return(
        <MyProfileContainerDiv>
            <MyProfileDIV>
                <MyProfileName>
                    {
                        parseInt(userProfile[0].year) + "기 \n" + userProfile[0].name
                    }
                </MyProfileName>
                <Circle>
                    {
                        userProfile[0].name[2]
                    }
                </Circle>
            </MyProfileDIV>
        </MyProfileContainerDiv>
    )
}

const MyProfileContainerDiv = styled.div`

`

const MyProfileDIV = styled.div`
    background-color: #88B9D7;
    border-radius: 0.5rem;
    height: 130px;
    position: relative;
    z-index: 2;
`
const MyProfileName = styled.div`
    text-align: right;
    text-justify: auto;
    font-weight: bold; 
    font-size: 20px;
    z-index: 3;
    position: absolute;
    top: 55%;
    left: 14.5%;
    white-space: pre-wrap;
`
const Circle = styled.div`
    margin-top: -30px;
    margin-left: 30px;
    width: 100px;
    height: 100px;
    background-color: #4472C4;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    font-size: 50px;
    position: absolute;
    z-index: 3;
    box-shadow: 3px 3px 3px gray;
`

export default MyProfile;