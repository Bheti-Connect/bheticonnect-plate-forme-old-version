import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Cover from '../../assets/images/background-First.png'
import Logo from '../../assets/images/bheti-connect-logo.jpeg'
import SubText from '../../components/SubText';
import Greeting from '../../components/Greeting';
import Footer from '../../components/Footer';

const Accueil = () => {
    return (
        <AccueilStyled>
            <div className='image_div'>
                <Image className='cover_image' src={Cover} alt='Cover' />
            </div>
            <div className='profil_div'>
                <Image className='pp_logo' src={Logo} alt='Bheti Connect Logo' />
            </div>
            <WelcomeStyled>Découvrez des opportunités d’investissements exclusives </WelcomeStyled>
            <SubText />
            <Greeting />
            <Footer />

        </AccueilStyled>
    )
}

const AccueilStyled = styled.section`

.image_div {
    position: relative;
    width: 100%;
    .cover_image{
        width: 100%;
        height: 280px;
    }
}

.profil_div{
    position: absolute;
    width: 12%;
    .pp_logo{
        width: 62%;
        height: 125px;
        position: absolute;
        top: -10vh;
        left: 7vw;
        @media only screen and (max-width: 1440px) {
            width: 80%;
            height: 125px;
        }
    }
}
`
const WelcomeStyled = styled.h2`
    position: absolute;
    margin-top: 100px;
    font-size: 40px ;
    width: 80vw;
    left: 7vw;
`

export default Accueil;