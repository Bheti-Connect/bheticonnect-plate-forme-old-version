import '../styles/globals.css'
import NavMenu from './Administrateur/NavMenu'

function MyApp({ Component, pageProps }) {
  return <>
    <NavMenu />
    <Component {...pageProps} />
  </>
}

export default MyApp
