import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../types/auth';

import {getCookie} from '../../utils/getCookie';

export const fetchUser = () => async (dispatch, getState) => {
    if(!(getState() && getState().auth && getState().auth.user)){
        dispatch({type: FETCH_USER_REQUEST})
        try{
            const response = await fetch('/user/profile', {
                headers: {
                    method: 'GET',
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+ getCookie('x-auth-cookie')
                }
            })
            try{
                const jsonResponse = await response.json()
                dispatch({type: FETCH_USER_SUCCESS, payload: jsonResponse.user})
            }
            catch(error){
                dispatch({type: FETCH_USER_ERROR, payload: 'something went wrong.'})
            }
        }
        catch(error){
            dispatch({type: FETCH_USER_ERROR, payload: 'something went wrong'})
        }
    }
}