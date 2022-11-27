import styled from 'styled-components';


const SubText = () => {
    return (
        <TextContainerStyled>
            <div className='text_div_one'>
                <p className='sub_text'>Vous trouverez ci-dessous des informations clés sur des startups et PME qui ouvrent leur capital pour prendre une position décisive sur leurs marchés. </p>
            </div>
            <div className='text_div_two'>
                <p className='sub_text'>Vous souhaitez en savoir plus sur ces opportunités et/ou rencontrer les fondateurs ? Cliquez sur “Recevoir le deck”. </p>
            </div>
        </TextContainerStyled>
    )
}

const TextContainerStyled = styled.div`
    position: absolute;
    width: 100%;
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

export default SubText