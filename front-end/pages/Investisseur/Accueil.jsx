import React,  { useEffect, useState } from 'react'
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
import { ModalTalkToExpert, ModalWaiting } from './ModalSweetAlert';

const Accueil = () => {

    const [apiTest, setApiTest] = useState({
        "option1":{
            "isVerified": false,
            "waiting":false
        },
        "option2":{
            "isVerified": false,
            "waiting":true
        },
        "option3":{
            "isVerified": true,
            "waiting":false
        }
    })

    const router = useRouter();
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-info'));
        if(!user) {
            router.push('/');
        }
    })


    useEffect(() => {

        let test = apiTest.option3

        if(test.waiting == false && test.isVerified == false){
            ModalTalkToExpert()
        }

        if(test.waiting == true && test.isVerified == false){
            ModalWaiting()
        }

        /*
        let waiting = setTimeout(() => {
            //ModalTalkToExpert()
        }, 5000);

        return () => {
        clearTimeout(waiting)
        }
        */

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