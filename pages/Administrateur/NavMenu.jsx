import React from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components'
import Link from 'next/link'
import logoBheti from './../../assets/images/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUserTie, faMessage, faUserGroup, faFolder, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

const NavMenu = ({ children }) => {

    const router = useRouter();
    const { pathname } = router;

    const showNavbar = pathname === '/Administrateur/Accueil' || pathname === '/Administrateur/PitchDeck' || pathname === '/Administrateur/Entrepreneur' || pathname === '/Administrateur/Investisseur' || pathname === '/Administrateur/Message' || pathname === '/Administrateur/Parametre' || pathname === '/Administrateur/Deconnexion';

    return (
        <div>
            {showNavbar && (
                <Container>
                <ul>
                    <li>
                        <a className='logo' href="#">
                            <Image src={logoBheti} alt='logo bheti' />
                        </a>
                    </li>
                    <li className='button afterLogo'>
                        <Link href="">
                                <FontAwesomeIcon className='icon' icon={faHouse} />
                                <span className="nav-item">Dashboard</span>
                            
                        </Link>
                    </li>
                    <li  className='button'><a href="#">
                        <FontAwesomeIcon className='icon' icon={faUserGroup} />
                        <span className="nav-item">Entrepreneur</span>
                    </a></li>
                    <li  className='button'><a href="#">
                        <FontAwesomeIcon className='icon' icon={faUserTie} />
                        <span className="nav-item">Investisseur</span>
                    </a></li>
                    <li  className='button'><a href="#">
                    <FontAwesomeIcon className='icon' icon={faMessage} />
                        <span className="nav-item">Message</span>
                    </a></li>
                    <li className='button afterLogo'>
                        <Link href="/Administrateur/PitchDeck" caseSensitive={false}>
                                <FontAwesomeIcon className='icon' icon={faFolder} />
                                <span className="nav-item">Pitch Deck</span>
                        </Link>
                    </li>
                    <li  className='button'><a href="#" className='setting'>
                        <FontAwesomeIcon className='icon' icon={faGear} />
                        <span className="nav-item">Parametre</span>
                    </a></li>
                    <li  className='button'><a href="#" className='logout'>
                        <FontAwesomeIcon className='icon' icon={faRightFromBracket} />
                        <span className="nav-item">Deconnexion</span>
                    </a></li>
                </ul>
            </Container>
            )}
            
        </div>
    
    )
}

// style CSS

const Container = styled.nav`
position: absolute;
top:0;
bottom: 0;
height: 101%;
z-index: 10;
left:0;
background: #641C1C;
width: 90px;
overflow:hidden;
transition: width 0.2s linear;

&:hover{
    width: 280px;
    transition: all 0.5s ease;
}

ul li{
    list-style: none;
}


ul{
    padding: 0;
}




.logo{
    display: flex;
    justify-content: start;
    transition: all 0.5s ease;
    margin: 10px 0 0 20px;

    img {
        width: 45px;
        height: 45px;
    }
}

.button a{
    position:relative;
    color: white;
    margin-top: 10px ;
    font-size: 14px;
    display:table;
    width: 300px;
    padding: 10px;
    text-decoration: none;

    &:hover{
       text-decoration: underline;
    }

}

.icon{
    position: relative;
    width: 30px;
    height: 30px;
    left: 14px;
    top:14px;
    font-size: 20px;
    text-align: center;
    color: #641C1C;
    background: white;
    border-radius: 10px;
    padding: 5px
}

.button .nav-item{
    position: relative;
    top: 0;
    margin-left: 45px;
    font-family: "Inter", sans-serif;
}

.button .logout{
    position: absolute;
    bottom: 30px;
}

.button .setting{
    position: absolute;
    bottom: 100px;
}

.afterLogo{
    margin-top: 60px;
}


`;

export default NavMenu