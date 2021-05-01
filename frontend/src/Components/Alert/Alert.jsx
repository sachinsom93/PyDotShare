import React from 'react';
import { useSelector } from 'react-redux';
import AlertBox from '../../Partials/Alert/AlertBox';
import styles from './Alert.module.css';


function Alert() {
    const alerts = useSelector(state => state.alerts)

    return (
        <div>
            {
            alerts.map(alert => {
                return (
                    <div className={styles.container}>
                        <AlertBox msg={alert.msg} type={alerts.type} duration={alerts.duration}/>
                    </div>
                )
            })
            }        
        </div>
    )
}

export default Alert
