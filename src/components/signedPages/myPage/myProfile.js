import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useRecoilValue } from 'recoil';
import { UserID } from '../../recoil';
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
                setUserProfile(response.data);
            })
        };
        getUserProfile();
    }, [ ID ]);

    return(
        <MyProfileContainerDiv>
            <MyProfileDIV>
                <ProfileLeftInf>
                    <Circle>
                    {
                        userProfile !== 0 ?
                        userProfile[userProfile.length-1].name[(userProfile[userProfile.length-1].name.length)-1]
                        :
                        ''
                    }
                    </Circle>
                    <MyProfileName>
                    {
                        userProfile !== 0 ?
                        String(userProfile[userProfile.length-1].year) + "기\n" + userProfile[userProfile.length-1].name
                        :
                        ''
                    }
                    </MyProfileName>
                </ProfileLeftInf>
                <ProfileRightInf>

                </ProfileRightInf>
            </MyProfileDIV>
        </MyProfileContainerDiv>
    )
}

const MyProfileContainerDiv = styled.div`

`

const MyProfileDIV = styled.div`
    background-color: #88B9D7;
    border-radius: 0.5rem;
    height: 160px;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
`

const ProfileLeftInf = styled.div`

`

const ProfileRightInf = styled.div`

`

const MyProfileName = styled.div`
    margin-top: 5px;
    margin-left: 35px;
    text-align: center;
    text-justify: auto;
    font-weight: bold;
    font-size: 20px;
    z-index: 3;
    top: 55%;
    left: 14.5%;
    white-space: pre-wrap;
`
const Circle = styled.div`
    margin-top: -15px;
    margin-left: 30px;
    width: 100px;
    height: 100px;
    background-color: #4472C4;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    font-size: 50px;
    z-index: 3;
    box-shadow: 3px 3px 3px gray;
`

export default MyProfile;
