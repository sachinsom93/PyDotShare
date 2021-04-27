import React from 'react';
import {Link} from 'react-router-dom';
import styles from './DropIcon.module.css';
import {useDispatch} from 'react-redux';
import {toggleMenuDots} from '../../store/actions/menuDots';

function DropIcon({position, Icon, path}) {
    const dispatch = useDispatch()

    function handleClick(){
        dispatch(toggleMenuDots(false))
    }
    return (
        <div className={styles.container} style={{top: position}}>
            <Link 
                to={path} 
                className={styles.icon} 
                onClick={handleClick}
            >
                <Icon />
            </Link>
        </div>
    )
}

export default DropIcon
