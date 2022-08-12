import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Login from '../components/Auth/Login';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  // const ISSERVER = typeof window === "undefined";
  const isBrowser = () => typeof window !== "undefined";
  const authSelector = useSelector((state) => state.auth.auth)

  const router = useRouter()
  // useLayoutEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     router.push('/login')
  //     return;
  //   }
  // }, [])

  if (isBrowser()) {
    if (!authSelector) {
      router.push('/login')
      return;
    }
  }

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>
      <p>homepage</p>
    </div>
  )
}