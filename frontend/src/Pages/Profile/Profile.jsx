import React, {useEffect} from 'react';
import styles from './Profile.module.css';
import {fetchUser} from '../../store/actions/auth';
import { useSelector,useDispatch } from 'react-redux';



function Profile() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch]) 

    return (
        <div className={styles.container}>
            {(state.auth && state.auth.isLoading) ? (<h1>wait</h1>) : 
            (state.auth && state.auth.user) ? (
                <div>
                    <img src={state.auth.user.avatar} alt="avatar"/>
                    <li>Name:-{state.auth.user.name}</li>
                    <li>username:-{state.auth.user.username}</li>
                    <li>email:- {state.auth.user.email}</li>
                    <li>provider:-{state.auth.user.provider}</li>
                </div>
            ): (
                <div>
                    <h1>{state.auth.error}</h1>
                </div>
            )}
        </div>
    )
}

export default Profile
