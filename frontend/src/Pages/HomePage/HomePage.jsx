import React, {useEffect} from 'react';
import { getCookie } from '../../utils/getCookie';
import styles from './HomePage.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../store/actions/user';

function HomePage() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/user/profile', {
                headers: {
                    method: 'GET',
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+ getCookie('x-auth-cookie')
                }
            })
            if(res.ok){
                const jsonRes = await res.json()
                dispatch(setUser(jsonRes))
                console.log(state)
            } else{
                console.log('HTTP-Error: ', res.status)
            }
        }
        fetchData()
    }, []) 

    return (
        <div className={styles.HomePage}>
            {state.user && state.user.name}
        </div>
    )
}

export default HomePage
