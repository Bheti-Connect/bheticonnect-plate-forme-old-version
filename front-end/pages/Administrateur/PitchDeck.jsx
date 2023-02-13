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
                        <h3>Investisseurs</h3>
                        
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
                            <h4>Kwame Nkrumah</h4>
                        </div>
                        <div className="individual-user">
                            <Image className="profile_pic" src={user}  alt='user icon' />
                            <h4>Nelson Mandela</h4>
                        </div>
                    </div>
                </Investors>
                <Decks>
                    <div className="deck-header">
                        <Image className="user_img"  src={user}  alt='user icon'/>
                        <h4 className="current_usr_name">Richard Nkulu</h4>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </Decks>

                <Companies>
                    <div>
                        Bonjour, il y a plusieurs façon de 
                    </div>
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
    position: relative ;
    margin: auto;
    display: flex;
    top: 5vh;
    z-index: -10 ;
    div + div {
        margin-left: 13vw ;
    }
`

const Investors = styled.div`
    position: relative ;
    margin: auto;
    width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px;
    h3{
        margin-left: 10%;
    }
    h4 {
        margin-left: 2vw;
        margin-top: 8px  ;
    }
    .small-container{
        margin-top: 40px;
        .individual-user{
            width: 15vw;
            display: flex;
            margin: auto;
            margin-left: -12vw;
            margin-top: 15px ;
            .profile_pic{
                width: 30px;
                height: 30px;
            }
        }
    }
`

const Decks = styled.div`
    position: relative;
    margin: auto;   
    width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px ;
    .deck-header{
        position: relative;
        width: 50%;
        margin: auto;
        img {
            position: relative;
            top: 5px;
            width: 40%;
            height: 40%;
            margin: 0px 30px ;
        }
        .current_usr_name{
            margin: auto;
        }
        
    }

`

const Companies = styled.div`
    width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px ;

`

export default PitchDeck