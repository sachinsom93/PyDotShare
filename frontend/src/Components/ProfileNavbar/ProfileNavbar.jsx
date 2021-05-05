import React from 'react'
import styles from './ProfileNavbar.module.css';
import {
    notebooks,
    recent_notebooks,
    liked_notebooks,
    saved_notebooks
} from '../../store/actions/profileNavbar';
import {useDispatch, useSelector} from 'react-redux';

function ProfileNavbar() {
    const dispatch = useDispatch()
    const profileNavOption = useSelector(store => store.profileNavOption)
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <span 
                    className={styles.navItems}
                    onClick={() => dispatch(recent_notebooks())}
                    style={{borderBottom: profileNavOption === "recent" ? "2px solid black": 0}}
                >Recents</span>

                <span 
                    className={styles.navItems}
                    onClick={() => dispatch(notebooks())}
                    style={{borderBottom: profileNavOption === "notebooks" ? "2px solid black": 0}}
                >Notebooks</span>

                <span 
                    className={styles.navItems}
                    onClick={() => dispatch(liked_notebooks())}
                    style={{borderBottom: profileNavOption === "liked" ? "2px solid black": 0}}
                >Liked</span>

                <span  
                    className={styles.navItems}
                    onClick={() => dispatch(saved_notebooks())}
                    style={{borderBottom: profileNavOption === "saved" ? "2px solid black": 0}}
                >saved</span>

            </nav>
        </div>
    )
}

export default ProfileNavbar
