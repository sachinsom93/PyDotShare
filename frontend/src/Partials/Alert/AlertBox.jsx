import React from 'react';
import styles from './AlertBox.module.css';
import {Clear} from  '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_ALERT} from '../../store/types/alert';

function AlertBox({alertId, msg, type, duration}) {
    const backgroundColor = {
        backgroundColor: (type === 'success') ? 'green' : 'red' 
    }
    const dispatch = useDispatch()
    const alerts = useSelector(state => state.alerts)
    const handleClose = () => {
        const rAlert = alerts.filter(alert => alert.id === alertId)
        dispatch({type: REMOVE_ALERT, payload: rAlert[0].id})
    }
    return (
        <div className={styles.container} style={backgroundColor}>
            <span>{msg}</span>
            <Clear
                className={styles.close}
                onClick={handleClose}
            >
            </Clear>
        </div>
    )
}

export default AlertBox
