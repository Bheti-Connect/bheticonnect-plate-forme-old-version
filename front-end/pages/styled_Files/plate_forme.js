import styled from 'styled-components';


export const AccueilStyled = styled.section`

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
export const WelcomeStyled = styled.h2`
    position: absolute;
    margin-top: 100px;
    font-size: 40px ;
    width: 80vw;
    left: 7vw;
`