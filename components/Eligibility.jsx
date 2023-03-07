import styled from 'styled-components';
import Measurement from './Measurement';
import EligibilityDetails from './EligibilityDetails';
import {details} from './detailsTab';

const Eligibility = () => {

    const eligibilityDetails = details.map((detail, index) => {
        return <EligibilityDetails
            key={index}
            details={detail}
        />
    })
    
    return (
        <Container>
            <TitleContainer>
                <h3>Votre éligibilité à la levée de fonds</h3>
            </TitleContainer>
            <EligibilityContainer>
                <div className='explanation'>
                    <p>Evaluation de votre projet : découvrez toutes les questions critiques que pourrait soulever un investisseur afin d’anticiper les risques de rejet de dossier</p>
                </div>
                <Details>
                    <div className='first_container'>
                        <div className='elements'>
                            <Measurement 
                                name='Traction'
                                percentage='80%'
                                value='80'
                                status='success'
                            />
                            <Measurement 
                                name='Équipe'
                                percentage='56%'
                                value='63'
                                status='warning'
                            />
                            <Measurement 
                                name='Scalabilité'
                                percentage='33%'
                                value='33'
                            />
                            <Measurement 
                                name='Qualité du dossier'
                                percentage='63%'
                                value='63'
                            />
                        </div>
                        <div>
                            {eligibilityDetails}
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </Details>
            </EligibilityContainer>
        </Container>
    )
}


const Container = styled.div`
position: relative;
top: 65vh;
margin-left: 7vw;
@media only screen and (max-width: 1440px) {
    top: 82vh;
}
`

const TitleContainer = styled.div`
h3 {
    font-size: 22px ;
}
`

const EligibilityContainer = styled.div`
display: block;
margin-top: 2vh;
.explanation {
    p {
        font-size: 16px;
        font-family: 'Nunito', sans-serif;


    }
}

`

const Details = styled.div`
    display: flex;
    .first_container{
        display: block;
        .elements{
            width: 41vw;
            background-color: #fff;
            border-radius: 30px;
        }
    }
`

export default Eligibility