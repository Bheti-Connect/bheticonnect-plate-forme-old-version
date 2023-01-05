import React,  { useEffect } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import * as Components from '../styled_Files/plate_forme'
import Cover from '../../assets/images/background-First.png'
import Logo from '../../assets/images/bheti-connect-logo.jpeg'
import SubText from '../../components/SubText';
import Greeting from '../../components/Greeting';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import AllCards from '../../components/cards/AllCards';
import { ModalTalkToExpert } from './ModalSweetAlert';

const Accueil = () => {
    const router = useRouter();
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-info'));
        if(!user) {
            router.push('/');
        }
    })


    useEffect(() => {

        let waiting = setTimeout(() => {
            ModalTalkToExpert()
        }, 5000);

        return () => {
        clearTimeout(waiting)
        }

    },[])

    return (
        <Components.AccueilStyled>
            <div className='image_div'>
                <Image className='cover_image' src={Cover} alt='Cover' />
            </div>
            <div className='profil_div'>
                <Image className='pp_logo' src={Logo} alt='Bheti Connect Logo' />
            </div>
            <Components.WelcomeStyled>Découvrez des opportunités d’investissements exclusives </Components.WelcomeStyled>
            <SubText />
            <Greeting />
            <CardsDiv className='cards_display'>
                <AllCards/>
            </CardsDiv>
            
            <Footer />
        </Components.AccueilStyled>
    )
}

const CardsDiv = styled.div`
    position: relative;
    margin: 230px 0px 10px;
`


export default Accueil;