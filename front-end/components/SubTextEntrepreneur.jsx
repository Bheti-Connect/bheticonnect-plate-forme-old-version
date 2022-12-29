import styled from 'styled-components';
import TextContainerStyled from './SubText';


const SubTextEntrepreneur = () => {
    return (
        <TextContainerStyled>
            <div className='text_div_one'>
                <p className='sub_text'>De nombreux projets atteignent un point où des capitaux externes sont nécessaires pour financer et développer l'entreprise. </p>
            </div>
            <div className='text_div_two'>
                <p className='sub_text'>Le problème est que la levée de fonds est : </p>
                <ul>
                    <li>un exercice peu maitrisé par les fondateurs</li>
                    <li>très consommateur de temps</li>
                    <li>un mix complexe entre réseaux, agilité et technicité</li>
                </ul>
            </div>
        </TextContainerStyled>
    )
}

export default SubTextEntrepreneur