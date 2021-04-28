import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Alert.module.css';


function Alert() {
    const alerts = useSelector(state => state.alerts)

    return (
        <div>
            {
            alerts.map(alert => {
                return (
                    <div className={styles.container}>
                        <div className={styles.alert}>
                            {alert.msg}
                        </div>
                    </div>
                )
            })
            }        
        </div>
    )
}

export default Alert
