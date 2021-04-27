import React, {useEffect} from 'react';
import styles from './HomePage.module.css';
import {fetchUser} from '../../store/actions/auth';
import { useSelector,useDispatch } from 'react-redux';



function HomePage() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch]) 

    return (
        <div className={styles.container}>
            {(state.isLoading) ? (<h1>wait</h1>) : 
            (state.user) && (
                <div>
                    <img src={state.user.avatar} alt="avatar"/>
                    <h1>Name:-{state.user.name}</h1>
                    <h1>username:-{state.user.username}</h1>
                    <h1>email:- {state.user.email}</h1>
                    <h1>provider:-{state.user.provider}</h1>
                </div>
            )}
        </div>
    )
}

export default HomePage
