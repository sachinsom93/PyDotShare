import {SET_USER} from '../types/user';

const initialState = {
    user: null,
    darkTheme: false,
    showMenu: false
}


export const userReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case SET_USER:
            console.log(payload, 'from reducer again', typeof(payload))
            return {
                ...state,
                user: payload,
            }
        default:
            return state;
    }
}