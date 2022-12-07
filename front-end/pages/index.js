import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
<<<<<<< HEAD
import Logo from '../assets/images/bheti-connect-logo.jpeg'
import { useEffect } from 'react'

=======
import {AccountBox} from './auth/accountBox';
>>>>>>> e487cfed953a67e05717d82b0d3e3137bb09889c

// var data = JSON.parse(localStorage.getItem('user-info'));

export default function Home() {
  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    if(params.get('email')) {
      let data = {
        name: params.get('name'),
        email: params.get('email')
      }
      localStorage.setItem('user-info', JSON.stringify(data));
      location.href = '/';

    } else if(!localStorage.getItem('user-info')) {
      window.location.replace('http://localhost:3000/connexion')
      // redirect to login if not loggedin
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Application created by Richard Nkulu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <AccountBox />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright Bheti Connect{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
