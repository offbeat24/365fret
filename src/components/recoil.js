import { atom } from "recoil";

export const UserID = atom({
    key: 'UserID',
    default: -1,
});

export const Location = atom({
    key: 'Location',
    default: '/'
});
