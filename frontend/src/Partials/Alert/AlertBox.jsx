import React from 'react';
import styles from './AlertBox.module.css';
import {Clear} from  '@material-ui/icons';

function AlertBox({msg, type, duration}) {
    const backgroundColor = {
        backgroundColor: (type === 'success') ? 'green' : 'red' 
    }
    return (
        <div className={styles.container} style={backgroundColor}>
            <span>{msg}</span>
            <Clear style={{color: 'white'}}></Clear>
        </div>
    )
}

export default AlertBox
