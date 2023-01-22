import styled from 'styled-components';

const Eligibility = () => {
    return (
        <Container>
            <TitleContainer>
                <h3>Votre éligibilité à la levée de fonds</h3>
            </TitleContainer>
            <div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
position: relative;
top: 81vh;
margin-left: 7vw;

`

const TitleContainer = styled.div`
h3 {
    font-size: 22px ;
}
`

export default Eligibility