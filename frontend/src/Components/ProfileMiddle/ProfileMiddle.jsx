import React from 'react'
import styles from './ProfileMiddle.module.css';

const ProfileMiddle = ({followers, following}) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_2}>
                <div className={styles.followers}>
                    <span>{followers}</span>
                    <h3>Followers</h3>
                </div>
                <div className={styles.following}>
                    <span>{following}</span>
                    <h3>Following</h3>
                </div>
            </div>
            <div className={styles.container_3}>
                <div className={styles.recents}>
                    <div className={styles.circle}></div>
                </div>
                <p>Your recent Followers</p>
            </div>
        </div>
    )
}

export default ProfileMiddle
