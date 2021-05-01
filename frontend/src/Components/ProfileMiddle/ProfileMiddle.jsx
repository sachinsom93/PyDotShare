import React from 'react'
import styles from './ProfileMiddle.module.css';

const ProfileMiddle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_2}>
                <span>Followers</span>
                <span>Following</span>
            </div>
        </div>
    )
}

export default ProfileMiddle
