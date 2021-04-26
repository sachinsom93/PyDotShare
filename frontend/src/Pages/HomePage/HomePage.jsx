import React, {useEffect, useState} from 'react';
import { getCookie } from '../../utils/getCookie';
import styles from './HomePage.module.css';

function HomePage() {

    const [user, setUser] = useState({})

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
                console.log(jsonRes)
                setUser(jsonRes)
            } else{
                console.log('HTTP-Error: ', res.status)
            }
        }
        fetchData()
    }, []) 

    return (
        <div className={styles.HomePage}>
            {user.name}
        </div>
    )
}

export default HomePage
