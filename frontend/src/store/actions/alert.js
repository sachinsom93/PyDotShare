import {
    v4 as uuid
} from 'uuid';

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types/alert';

export const setAlert = (msg, type = 'danger', duration = 5000) => (dispatch, getState) => {
    const id = uuid();
    dispatch({type: SET_ALERT, payload: {id, msg, type, duration}})
    setTimeout(() => {
        dispatch({type: REMOVE_ALERT, payload: id})
    }, duration);
}