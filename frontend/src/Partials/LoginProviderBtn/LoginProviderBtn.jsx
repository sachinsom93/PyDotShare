import React from 'react';
import styles from './LoginProviderBtn.module.css';

function LoginProviderBtn({logoImage, text}) {
    return (
        <div className={styles.container}>
            <img 
                src={logoImage} 
                className={styles.image}   
                alt="wait"
            />
            <span className={styles.text}>
                {text}
            </span>
        </div>
    )
}

export default LoginProviderBtn
