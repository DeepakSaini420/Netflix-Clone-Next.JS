import '../styles/globals.css'
import {useState,useEffect} from 'react'
import { magic } from '../lib/magic-client'
import {useRouter} from 'next/router'
import Loading from '../components/loading/loading'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoding,setIsLoading]=useState(false);
  // useEffect(async()=>{
  //   const isLogin =await magic.user.isLoggedIn();
  //   if(isLogin){
  //     router.push('/');
  //   }else{
  //     router.push('/login');
  //   }
  // },[]);

  // useEffect(() => {
  //   const handelComplete = ()=>{
  //     setIsLoading(false)
  //   }
  //  router.events.on('routeChangeComplete',handelComplete);
  //  router.events.on('routeChangeError',handelComplete);
   
  //  return ()=>{
  //    router.events.off('routeChangeComplete',handelComplete);
  //    router.events.off('routeChangeError',handelComplete);
  //  }
  // },[router])
  return isLoding? <Loading/>: <Component {...pageProps} />
}

export default MyApp
