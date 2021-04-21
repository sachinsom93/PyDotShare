import React from 'react';
import LoginProviderBtn from '../../Partials/LoginProviderBtn/LoginProviderBtn';
import styles from './LoginForm.module.css';

// Logo Images
import GoogleLogo from '../../assest/GoogleLogo.png';
import FBLogo from '../../assest/FacebookLogo.png';
import GithubLogo from '../../assest/GithubLogo.png';

const LoginForm = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <h4>Login with your media account</h4>
            <LoginProviderBtn logoImage={GoogleLogo} text='Google'/>
            <LoginProviderBtn logoImage={FBLogo} text='Facebook'/>
            <LoginProviderBtn logoImage={GithubLogo} text='Github'/>
        </div>
    )
}

export default LoginForm;