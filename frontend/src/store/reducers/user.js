import {SET_USER} from '../types/user';
const initialState = {
    user: {},
    darkTheme: false,
}


export const userReducer = (state=initialState, {type, user}) => {
    switch (type) {
        case SET_USER:
            return [...state, user]
        default:
            return state;
    }
}