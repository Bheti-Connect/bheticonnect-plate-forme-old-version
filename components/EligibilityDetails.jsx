import styled from "styled-components"

const EligibilityDetails = ({ details }) => {
    return (
        <Container>
            <VerticalBar />
            <p>{details}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex; 
    align-items: center;
    margin-top: 1.5vh;
    p{
        margin-left: 1vw;
        font-size: 15px;
        width: 40vw;
    }

`

const VerticalBar = styled.div`
    background-color: #000;
    width: 6px;
    height: 35px;
    border-radius: 30px;
`;

export default EligibilityDetails