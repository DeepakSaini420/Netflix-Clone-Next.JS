import Head from 'next/head'
import styles from '../styles/Login.module.css'
import Image  from 'next/image'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import {magic} from '../lib/magic-client'


export default function Login(){

    const [input,changeInput]=useState('');
    const [userMsg,changeMsg]=useState('');
    const [isLoding,setIsLoading]=useState(false);
    const router = useRouter();

    const handelChange = (e) => {
        changeInput(e.target.value)
    }
    useEffect(() => {
      const handelComplete = ()=>{
        setIsLoading(false)
      }
     router.events.on('routeChangeComplete',handelComplete);
     router.events.on('routeChangeError',handelComplete);
     
     return ()=>{
       router.events.off('routeChangeComplete',handelComplete);
       router.events.off('routeChangeError',handelComplete);
     }
    },[router])
    
    const submitForm = async (e) =>{
        e.preventDefault();
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setIsLoading(true);
        if(!regex.test(input)){
            changeMsg('Please Enter Correct Email!');
            setIsLoading(false);
        }else{
            // router.push('/');
            try {

              const didToken=await magic.auth.loginWithMagicLink({ email: input });
              console.log({didToken});

              if(didToken){
                router.push('/');
              }
            
            } catch(err) {
              console.log(err)
              setIsLoading(false);
              // Handle errors if required!
            
            }
            
            changeMsg('');
        }
    }

    return (
        <div className={styles.container}>
        <Head>
          <title>Netflix SignIn</title>
        </Head>
  
        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            <a className={styles.logoLink} href="/">
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </div>
        </header>
  
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
  
            <input
              type="text"
              placeholder="Email address"
              className={styles.emailInput}
              onChange={handelChange}
            />
  
            <p className={styles.userMsg}>{userMsg}</p>
            <button className={styles.loginBtn} onClick={submitForm}>
                {isLoding? 'Loading..':'Sign In'}
            </button>
          </div>
        </main>
      </div>
    )
}