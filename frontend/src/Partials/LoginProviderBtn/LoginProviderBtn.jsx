import React from 'react';
import styles from './LoginProviderBtn.module.css';

const handleClick = text => {
    window.open(`http://localhost:8000/auth/${text.toLowerCase()}`, '_self')
}

function LoginProviderBtn({logoImage, text}) {
    return (
        <div className={styles.container} onClick={() => handleClick(text)}>
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
