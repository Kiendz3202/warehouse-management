import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Login from '../components/Auth/Login';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {

  // const router = useRouter()
  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.push('/home-page')
  //   }
  // }, [])

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>

      <p>homepage</p>
    </div>
  )
}
