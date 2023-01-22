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
                    <div className="title">
                        <h3>Investisseur</h3>
                        
                    </div>
                    <div className="small-container">
                        <div className="individual-user">
                            <Image className="profile_pic"  src={user}  alt='user icon'/>
                            <h4>Richard Nkulu</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic" src={user}  alt='user icon'/>
                            <h4>Thomas Sowell</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic"  src={user}  alt='user icon'/>
                            <h4>Joseph Mobutu</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic" src={user}  alt='user icon' />
                            <h4>Patrice Lumumba</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic"  src={user}  alt='user icon'/>
                            <h4>Cheikh Anta Diop</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic" src={user}  alt='user icon' />
                            <h4>Tata Madiba</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic"  src={user}  alt='user icon'/>
                            <h4>Kwame Nkrumah</h4>
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
    border-radius: 30px;
    h3{
        margin-left: 10%;

    }
    h4 {
        margin-left: 7%;
        margin-top: 8px  ;
    }
    .small-container{
        margin-top: 40px;
        .individual-user{
            width: 15vw;
            display: flex;
            margin: auto;
            margin-left: -90px;
            margin-top: 15px ;
            .profile_pic{
                width: 30px;
                height: 30px;
            }
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