import { useEffect } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/HomePage.module.css'


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
