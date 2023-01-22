import styled from 'styled-components';
import TextContainerStyled from './SubText';


const SubTextEntrepreneur = () => {
    return (
        <Container>
            <div className='text_div_one'>
                <p className='sub_text'>Des nombreux projets atteignent un point où des capitaux externes sont nécessaires pour financer et développer l'entreprise. </p>
            </div>
            <div className='text_div_two'>
                <p className='sub_text'>Le problème est que la levée de fonds est : </p>
                <ul>
                    <li>un exercice peu maitrisé par les fondateurs</li>
                    <li>très consommateur de temps</li>
                    <li>un mix complexe entre réseaux, agilité et technicité</li>
                </ul>
            </div>
            <div className='text_div_two'>
                <p className='sub_text'>
                Pour remédier à cette situation, nous mettons à votre disposition Bheti Connect Base, un outil qui vous permettra de préparer et mener votre levée de fonds tout en bénéficiant de l’appui des experts en financement de projet. 
                </p>
            </div>
            <div className='text_div_one'>
                <p className='sub_text'>Grâce à un mix entre Intelligence artificielle et expertise en financement de projet, l’outil Bheti Connect Base  vous aide à : </p>
            </div>
            <div className='text_div_two'>
                <p className='sub_text'>Le problème est que la levée de fonds est : </p>
                <ul>
                    <li>Etape 1 :  Evaluer votre éligibilité à une levée de fonds et votre conformité aux exigences des capital-risqueurs </li>
                    <li>Etape 2 : Préparer l’argumentaire et la documentation nécessaire pour réaliser votre levée de fonds</li>
                    <li>Etape 3 :  Identifier des investisseurs qui match avec votre activité </li>
                    <li>Etape 4 : laissez-vous guider dans la mise en relation avec les investisseurs et la gestion des négociations pour obtenir votre financement</li>
                </ul>
            </div>
        </Container>
    )
};


const Container = styled.div`
    position: absolute;
    width: 80%;
    margin-top: 60px;
    margin-left: 7vw;
    .text_div_one{
        margin-top: 100px ;
}
    div{
        .sub_text{
        position: relative;
        width: 100%;
        font-size: 15px;
    }
}
`

export default SubTextEntrepreneur