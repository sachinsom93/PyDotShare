import React from 'react';
import styles from './Loader.module.css';

function Loader() {
    return (
            <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.lines}></div>
                <div className={styles.lines}></div>
                <div className={styles.lines}></div>
            </div>
        </div>
    )
}

export default Loader
