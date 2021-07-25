import React from 'react';
import styles from './ProfileHeader.module.css';

function ProfileHeader({name, username, avatar, provider, email}) {
    username = `@${username}`
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img
                    className={styles.avatarImg}
                    src={avatar}
                    alt={username}
                />
            </div>
            <span className={styles.name}>
                {name}
            </span>
            <h1 className={styles.username}>
                {username}
            </h1>
            <span className={styles.email}>
                {email}
            </span>
            <div className={styles.links}>
                <div className={styles.linkItem}>T</div>
                <div className={styles.linkItem}>F</div>
                <div className={styles.linkItem}>S</div>
            </div>
        </div>
    )
}

export default ProfileHeader
