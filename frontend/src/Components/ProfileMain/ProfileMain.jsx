import React from 'react';
import styles from './ProfileMain.module.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

function ProfileMain() {
    return (
        <div className={styles.container}>
            <Switch >
                <Route path='/recents'>
                    <LoginForm />
                </Route>
            </Switch>
        </div>
    )
}

export default ProfileMain
