import React from 'react'
import styles from './ProfileNavbar.module.css';
import {NavLink} from 'react-router-dom';

function ProfileNavbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <NavLink
                    to='/recent'
                    className={styles.navItems}
                >Recents</NavLink>
                <NavLink 
                    to='/notebooks'
                    className={styles.navItems}
                >Notebooks</NavLink>
                <NavLink 
                    to='/liked-notebooks'
                    className={styles.navItems}
                >Liked</NavLink>
                <NavLink 
                    to='/saved-notebooks'
                    className={styles.navItems}
                >Saved</NavLink>
            </nav>
        </div>
    )
}

export default ProfileNavbar
