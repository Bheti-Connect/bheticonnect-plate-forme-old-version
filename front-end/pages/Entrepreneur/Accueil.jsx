import React from 'react'
import Image from 'next/image';
import * as Components from '../styled_Files/plate_forme'
import Cover from '../../assets/images/CoverEntrepreneur.jpg'
import Logo from '../../assets/images/bheti-connect-logo.jpeg'
import SubText from '../../components/SubText';
import Greeting from '../../components/Greeting';
import Footer from '../../components/Footer';
import styled from 'styled-components';
const Accueil = () => {
    return (
        <Components.AccueilStyled>
        <div className='image_div'>
            <Image className='cover_image' src={Cover} alt='Cover' />
        </div>
        <div className='profil_div'>
            <Image className='pp_logo' src={Logo} alt='Bheti Connect Logo' />
        </div>
        <Components.WelcomeStyled>Bheti Connect Base </Components.WelcomeStyled>
        <SubText />
        <Greeting />
        <FooterStyled className='footer'>
            <Footer />
        </FooterStyled>
    </Components.AccueilStyled>
    )
}


const FooterStyled = styled.div`
position: absolute;
bottom: 0px;

`

export default Accueil