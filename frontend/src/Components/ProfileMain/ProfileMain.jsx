import React from 'react';
import styles from './ProfileMain.module.css';
import {useSelector} from 'react-redux';
import Notebooks from '../Notebooks/Notebooks';

function ProfileMain() {
    const profileNavOption = useSelector(state => state.profileNavOption)
    const temp = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo dicta architecto eum dignissimos magnam officia. Mollitia quibusdam excepturi laudantium possimus odio consectetur ad beatae optio earum explicabo, animi ut?`
    if(profileNavOption === 'saved'){
        return (
            <div className={styles.container}>
                <Notebooks content={temp}/>                
            </div>
        )
    } else if(profileNavOption === 'notebooks'){
        return (
            <div className={styles.container}>
                <Notebooks content="Notebooks"/>
            </div>
        )
    } else if(profileNavOption === 'liked'){
        return (
            <div className={styles.container}>
                <Notebooks content="liked notebooks"/>
            </div>
        )
    } else{
        return (
            <div className={styles.container}>
                <Notebooks content="recent notebooks"/>
            </div>
    )}
}

export default ProfileMain
