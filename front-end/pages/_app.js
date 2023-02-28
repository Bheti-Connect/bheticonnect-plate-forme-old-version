import { useRouter } from 'next/router';
import '../styles/globals.css'
import NavMenu from './Administrateur/NavMenu';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const showNavbar = pathname === '/Administrateur/Accueil' || pathname === '/Administrateur/PitchDeck' || pathname === '/Administrateur/Entrepreneur' || pathname === '/Administrateur/Investisseur' || pathname === '/Administrateur/Message' || pathname === '/Administrateur/Parametre' || pathname === '/Administrateur/Deconnexion';

  return <>
    
      <NavMenu showNavbar={showNavbar}>
      </NavMenu>
      <Component {...pageProps} />
  </>
}

export default MyApp
