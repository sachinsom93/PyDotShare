import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import DropIcon from '../../Partials/DropIcon/DropIcon';
import {Call, Home, Person, Add} from '@material-ui/icons';
import {useSelector} from 'react-redux';
import {toggleMenuDots} from '../../store/actions/menuDots';
import {useDispatch} from 'react-redux';
import Logo from '../../Partials/Logo/Logo';
function Navbar() {

    // state variables
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    // handler methods
    function handleClick(){
        if (state.menuDots && state.menuDots.isMenuDotsOpen){
            dispatch(toggleMenuDots(false))
        } else{
            dispatch(toggleMenuDots(true))
        }
    }


    return (
        <div className={styles.container}>
            <Logo className={styles.logo}/>
            <div className={styles.menuIcon} onClick={handleClick}>
                <div className={styles.menuIconDots}></div>
                <div className={styles.menuIconDots}></div>
                <div className={styles.menuIconDots}></div>
            </div>
            {
                ((state.menuDots && state.menuDots.isMenuDotsOpen))&& (
                    <div>
                        <DropIcon position="6em" Icon={Home} path='/home'/>
                        <DropIcon position="10em"Icon={Call} path='/contact'/>
                        {
                            (state.auth.isLoading) ? (
                                <span>Load...</span>
                                ) : (state.auth.user) ? (
                                <DropIcon position="14em" Icon={Person} path='/profile'/>
                            ) : (
                                <DropIcon position="14em" Icon={Add} path='/auth'/>
                            )
                        }
                    </div>
                )
            }
            <div className={styles.navItems}>
                <Link to='/home' className={styles.navItem}>Home</Link>
                <Link to='/profile' className={styles.navItem}>Profile</Link>
                <Link to='/contact' className={styles.navItem}>Contact</Link>
                {
                    (state.auth.isLoading) ? (
                        <span>Load...</span>
                    ) : (state.auth && state.auth.user) ? (
                        <img
                            className={styles.avatar} 
                            src={state.auth.user.avatar} 
                            alt={state.auth.user.name} 
                        />
                    ) : (
                        <Link to='/auth' className={styles.navItem}>Login</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
