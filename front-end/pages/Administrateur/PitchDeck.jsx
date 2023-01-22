import styled from "styled-components";
import Image from 'next/image'
import user from '../../assets/images/user-image.png'

const PitchDeck = () => {
    return (
        <Container>
            <div className="left">
                <ul>
                    <h3 className='head-text'>Pitch Deck</h3>
                    <li className='sub-text'>Consultez demandes de pitch decks provenant des investisseurs.</li>
                </ul>
            </div>
            <PitchDeckContainer>

                <Investors>
                    <div className="">
                        <h4>Investisseur</h4>
                        
                    </div>
                    <div>
                    <div className="individual-user">
                            <Image className="profile_pic"  src={user}  alt='user icon'/>
                            <h4>Richard Nkulu</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic" src={user}  alt='user icon'/>
                            <h4>Will Smith</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic"  src={user}  alt='user icon'/>
                            <h4>Joseph Mobutu</h4>
                        </div>
                        <div>
                            <Image className="profile_pic" src={user}  alt='user icon' />
                            <h4>Patrice Lumumba</h4>
                        </div>
                    </div>

                </Investors>
                <Decks>
                    Bonjour Moi, c'est Channing
                </Decks>

                <Companies>
                    Bonjour, il y a plusieurs façon de 
                </Companies>

            </PitchDeckContainer>
        </Container>
        
    )
}



const Container = styled.section`
    display: grid;
    margin-left: 8vw;
    margin-top: 2px;
    .left {
        ul{
            list-style-type: none;

            .head-text{
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;
            }
            .sub-text{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                color: #641C1C;
            }
        }
    }
`
const PitchDeckContainer = styled.div`
    display: flex;
    position: relative;
    top: 5vh;
    z-index: -10 ;
    div + div {
        margin-left: 100px ;
    }
`

const Investors = styled.div`
    width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px ;
    h4 {
        margin-left: 10% ;
    }
    div{
        width: 20vw;
        .profile_pic{
            width: 20px;
            height: 20px;
        }
    }
`

const Decks = styled.div`
width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px ;

`

const Companies = styled.div`
    width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px ;

`

export default PitchDeck