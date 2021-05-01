import React from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
function LoginPage() {
    const user = useSelector(state => state.auth.user)

    return (
        <div>
            {
                (user) ? (
                    <Redirect to='/profile'/>
                    ) : (
                        <div className={styles.container}>
                        <LoginForm />
                    </div>
                )
            }
        </div>
    ) 
}

export default LoginPage