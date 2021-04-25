import React, {useEffect} from 'react';
import styles from './HomePage.module.css';

function HomePage() {


    
    
    useEffect(() => {
        let finalvalue = ""
        let cookieArr = document.cookie.split(";")
        cookieArr.forEach((value) => {
            let cookiePair = value.split("=")
            if('x-auth-cookie' === cookiePair[0].trim()){
                finalvalue = cookiePair[1]
            }
        })
        fetch('http://localhost:8000/user/profile', {
            headers: {
                method: 'GET',
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ finalvalue
            }
        })
            .then(res => {
                console.log(res.data)
                console.log(res.body)
            })
    }, []) 


    return (
        <div className={styles.HomePage}>
            <span>HomePage</span>
        </div>
    )
}

export default HomePage
