import React, {useEffect} from 'react';
import styles from './Profile.module.css';
import {fetchUser} from '../../store/actions/auth';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../../Partials/Loader/Loader';
import { Redirect } from 'react-router';



function Profile() {

    const user = useSelector(state => state.auth.user)
    const isLoading = useSelector(state => state.auth.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch]) 

    return (
        <div>
            {
                (user) ? (
                    <div className={styles.container}>
                        {
                            (isLoading) ? (<Loader />) : (
                                <div>
                                    <img src={user.avatar} alt={user.username}/>
                                    <h3>{user.username}</h3>
                                    <h3>{user.name}</h3>
                                    <h3>{user.email}</h3>
                                    <h3>{user.createdAt}</h3>
                                    <h3>{user.provider}</h3>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <Redirect to='/auth' />
                )
            }
        </div>
    )
}

export default Profile


