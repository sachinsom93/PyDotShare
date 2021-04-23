import React, {useEffect} from 'react';
import styles from './HomePage.module.css';

function HomePage() {

    useEffect(() => {
        fetch('http://localhost:8000/user/profile')
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }, []) 


    return (
        <div className={styles.HomePage}>
            <span>HomePage</span>
        </div>
    )
}

export default HomePage
