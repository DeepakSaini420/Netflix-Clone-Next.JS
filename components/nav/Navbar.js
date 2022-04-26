import styles from './navbar.module.css'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { magic } from '../../lib/magic-client'

const NavBar = ()=>{

    const [username,setUsername]=useState('');

    const router = useRouter();

    const [showDropDown,toggleDropDown]=useState(false)

    useEffect(async ()=>{
        try{
            const {email,publicAddress}=await magic.user.getMetadata();
            setUsername(email)
        }catch(err){
            console.log(err);
        }
    },[setUsername])

    function handleOnClickHome(e){
        e.preventDefault();
        router.push('/')
    }

    function handleOnClickMyList(e){
        e.preventDefault();
        router.push('/browse/my-list')       
    }
    const handelSignOut= async (e) =>{
        e.preventDefault();
        try{
            await magic.user.logout();
            console.log(await magic.user.logout());
            router.push('/login')
        }catch(err){
            console.log('Error',err);
        }
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href='/'>
                    <div className={styles.logoWrapper}>
                        Netflix
                    </div>
                </a>
            <ul className={styles.navItems}>
                <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
            </ul>
            <nav className={styles.navContainer}>
                <div>
                    <button className={styles.usernameBtn} onClick={(e)=>{e.preventDefault();showDropDown?toggleDropDown(false):toggleDropDown(true)}}>
                        <p className={styles.username}>{username}</p>
                    </button>
                    { showDropDown && (
                        <div className={styles.navDropdown}>
                        <div>
                            <p className={styles.linkName} onClick={handelSignOut}>Sign Out</p>
                            <div className={styles.lineWrapper}></div>
                        </div>
                    </div>)}
                </div>
            </nav>
            </div>
        </div>
    )
}

export default NavBar;