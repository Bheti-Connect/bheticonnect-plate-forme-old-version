import React from 'react'
import Image from 'next/image';
import * as Components from '../styled_Files/plate_forme'
import Cover from '../../assets/images/CoverEntrepreneur.jpg'
import Logo from '../../assets/images/bheti-connect-logo.jpeg'
import Greeting from '../../components/Greeting';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import SubTextEntrepreneur from '../../components/SubTextEntrepreneur';
import Eligibility from '../../components/Eligibility';
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
        <Greeting />
        <SubTextEntrepreneur />
        <Eligibility />
    </Components.AccueilStyled>
    )
}


const FooterStyled = styled.div`
position: absolute;
margin-top: 1000px;
bottom: 2px;

`

export default Accueil