<<<<<<< HEAD
import React from 'react'
import Image from 'next/image';
import * as Components from '../styled_Files/plate_forme'
import Cover from '../../assets/images/background-First.png'
import Logo from '../../assets/images/bheti-connect-logo.jpeg'
import SubText from '../../components/SubText';
import Greeting from '../../components/Greeting';
import Footer from '../../components/Footer';
import AllCards from '../../components/cards/AllCards';
=======
import React from "react";
import Image from "next/image";
import * as Components from "../styled_Files/plate_forme";
import Cover from "../../assets/images/background-First.png";
import Logo from "../../assets/images/bheti-connect-logo.jpeg";
import SubText from "../../components/SubText";
import Greeting from "../../components/Greeting";
import Footer from "../../components/Footer";
>>>>>>> 9b30f90 (LinkedIn Sign Up & Sign In)

const Accueil = () => {
    return (
        <Components.AccueilStyled>
<<<<<<< HEAD
            <div className='image_div'>
                <Image className='cover_image' src={Cover} alt='Cover' />
            </div>
            <div className='profil_div'>
                <Image className='pp_logo' src={Logo} alt='Bheti Connect Logo' />
            </div>
            <Components.WelcomeStyled>Découvrez des opportunités d’investissements exclusives </Components.WelcomeStyled>
            <SubText />
            <Greeting />
            
            <AllCards/>
            
            <Footer />
=======
        <div className="image_div">
            <Image className="cover_image" src={Cover} alt="Cover" />
        </div>
        <div className="profil_div">
            <Image className="pp_logo" src={Logo} alt="Bheti Connect Logo" />
        </div>
        <Components.WelcomeStyled>
            Découvrez des opportunités d’investissements exclusives{" "}
        </Components.WelcomeStyled>
        <SubText />

        <Greeting />
        <Footer />
>>>>>>> 9b30f90 (LinkedIn Sign Up & Sign In)
        </Components.AccueilStyled>
    );
};

export default Accueil;
