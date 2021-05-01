import React, {useEffect} from 'react';
import styles from './Profile.module.css';
import {fetchUser} from '../../store/actions/auth';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../../Partials/Loader/Loader';
import { Redirect } from 'react-router';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';



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
                                <ProfileHeader 
                                    name={user.name}
                                    username={user.username}
                                    avatar={user.avatar}
                                    email={user.email}
                                    provider={user.provider}
                                />
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


