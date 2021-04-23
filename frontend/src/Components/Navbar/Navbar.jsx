import React,{useState} from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import DropIcon from '../../Partials/DropIcon/DropIcon';
import {Call, Home, Person, Add} from '@material-ui/icons';

function Navbar() {

    // state variables
    const [showMenu, setShowMenu] = useState(false);



    // handler methods
    function handleClick(){
        setShowMenu((prev) => {
            if(prev){
                return false
            } else{
                return true
            }
        })
    }


    return (
        <div className={styles.container}>
            <div className={styles.menuIcon} onClick={handleClick}>
                <div className={styles.menuIconDots}></div>
                <div className={styles.menuIconDots}></div>
                <div className={styles.menuIconDots}></div>
            </div>
            {
                showMenu && (
                    <div>
                        <DropIcon position="6em" Icon={Home} path='/home'/>
                        <DropIcon position="10em" Icon={Person} path='/profile'/>
                        <DropIcon position="14em"Icon={Call} path='/contact'/>
                        <DropIcon position="18em" Icon={Add} path='/auth'/>
                    </div>
                )
            }
            <Link to='/home' className={styles.navItem}>Home</Link>
            <Link to='/profile' className={styles.navItem}>Profile</Link>
            <Link to='/contact' className={styles.navItem}>Contact</Link>
            <Link to='/auth' className={styles.navItem}>Login</Link>
        </div>
    )
}

export default Navbar
