import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../assets/images/bheti-connect-logo.jpeg'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Application created by Richard Nkulu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image className={styles.logoImage} src={Logo} alt='Bheti Connect Logo' />
        <h1 className={styles.title}>
          Bienvenue sur <a href="https://nextjs.org">Bheti Connect App</a>
        </h1>
        <h3>La plate-forme des Entrepreneurs et Investisseurs en Afrique Francophone</h3>
        <Link href='Investisseur/Accueil'>
          <button className={styles.button_start}>Commencer votre experience</button>
        </Link>
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