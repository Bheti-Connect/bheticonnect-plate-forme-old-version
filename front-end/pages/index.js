import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Connexion from './auth/Connexion'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user-info"));
    if(user) {
      if(user.data.role == null) {
        router.push('/Etape-Suivante')
      }
      else if(user.data.role == 'investisseur') {
        router.push('/Investisseur/Accueil');
      } else if(user.data.role == 'entrepreneur') {
        router.push('/Entrepreneur/Accueil');
      } else if (user.data.role == 'administrateur') {
        router.push('/Administrateur/Accueil');
      }
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Connexion</title>
        <meta name="description" content="Application created by Richard Nkulu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Connexion />
        
      </main>
      <Link href='Etape-Suivante/'>
          <button>Change</button>
        </Link>

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
