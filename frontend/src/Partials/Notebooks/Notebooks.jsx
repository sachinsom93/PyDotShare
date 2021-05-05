import React from 'react';
import styles from './Notebooks.module.css';

function Notebooks({content}) {
    return (
        <div className={styles.container}>
            {content}
        </div>
    )
}

export default Notebooks
