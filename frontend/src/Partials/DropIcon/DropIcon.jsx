import React from 'react';
import {Link} from 'react-router-dom';
import styles from './DropIcon.module.css';

function DropIcon({position, Icon, path}) {
    return (
        <div className={styles.container} style={{top: position}}>
            <Link to={path} className={styles.icon}>
                <Icon />
            </Link>
        </div>
    )
}

export default DropIcon
