import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from '../types/auth';


const initialState = {
    user: null,
    error: null,
    isLoading: false
}


const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload,
                error: null
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload,
                user: {}
            }
        default:
            return state
    }
}

export default authReducer