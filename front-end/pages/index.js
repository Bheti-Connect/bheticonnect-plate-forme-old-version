import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Connexion from './auth/Connexion'

export default function Home() {
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
