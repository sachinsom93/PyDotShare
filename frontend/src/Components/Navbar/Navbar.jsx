import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.container}>
            <Link to='/home' className={styles.navItem}>Home</Link>
            <Link to='/profile' className={styles.navItem}>Profile</Link>
            <Link to='/contact' className={styles.navItem}>Contact</Link>
            <Link to='/auth' className={styles.navItem}>Login</Link>
        </div>
    )
}

export default Navbar
