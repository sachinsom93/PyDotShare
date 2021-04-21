import React from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../Components/LoginForm/LoginForm';

function LoginPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Login Page</h1>
            <LoginForm />
        </div>
    )
}

export default LoginPage
