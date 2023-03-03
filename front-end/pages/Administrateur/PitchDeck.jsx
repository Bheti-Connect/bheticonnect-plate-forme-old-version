import styled from "styled-components";
import Image from 'next/image';
import Corporation from '../../assets/images/corporation.png';
import Chat from '../../assets/images/chat.png';
import user from '../../assets/images/user-image.png'
import send from '../../assets/images/send.png'
import sendPitch from './sendPitch'
import DropFileInput from "./DropFileInput";


const PitchDeck = () => {
    const onFileChange = (files) => {
        console.log(files);
    }
    
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
                            <span><h4>Richard Nkulu</h4></span>
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
                    <div className="deposit_container">
                        <div className="upper_elements">
                            <h5 className="project_name">Nom du projet</h5>
                            <span className="status">or</span>
                        </div>
                        <div className="lower_elements">
                            <DropFileInput
                                onFileChange={(files) => onFileChange(files)}
                            />
                            <div className="send_div">
                                <span className="send_span" onClick={sendPitch}>
                                    <Image className="send_image" src={send} alt="send icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Decks>
                <Companies>
                    <div className="company_name">
                        <h3 className="company">Société</h3> 
                    </div>
                    <div className="company_details details">
                        <div className="div_one">
                            <Image src={Corporation} className="company_icon"  alt='corporation icon' />
                        </div>
                        <div className="div_two">
                            <h4>Bheti Connect</h4>
                        </div>
                        <div className="div_three">
                            <Image src={Chat} className="ask_pitch_deck" alt='corporation icon' />
                        </div>
                    </div>
                </Companies>

            </PitchDeckContainer>
            
        </Container>
        
    )
}



const Container = styled.div`
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
    div + div {
        margin-left: 10vw;
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
        color: #616161;
        padding: 6px;
        margin-left: 1vw;
        margin-top: 0px;
        width: 100%;
        align-item: center;
    }
    .small-container{
        margin-top: 40px;
        .individual-user{
            width: 14vw;
            display: flex;
            margin: auto;
            margin-left: -9vw;
            margin-top: 15px ;
            .profile_pic{
                width: 30px;
                height: 30px;
            }
            span{
                background: #A9DFBF;
                border-radius: 15px;
                height: 4vh;
                width: 100%;
                margin-left: 1vw;

            }
        }
    }
`

const Decks = styled.div`
    position: relative;
    margin: auto;   
    width: 26vw;
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
            width: 23%;
            height: 23%;
            margin: auto;
        }
        .current_usr_name{
            color: #B1B2B4;
            margin: auto;
        }
        
    }
    .deposit_container{
        height: 26vh;
        margin: auto;
        top: 40px ;
        background: #9CCCE8;
        position: relative;
        width: 23vw;
        border-bottom-right-radius: 15px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        .upper_elements{
            .status{
                color: red;
                position: absolute;
                background: red;
                border-radius: 50%;
                width: 20px;
                top: -3px;
                right: -3px;
            }
            .project_name{
                position: absolute;
                left: 10px;
            }
        }
        .lower_elements{
            position: relative;
            width: 100%;
            align-items: center;
            margin: auto;
            .send_div{
                position: relative;
                left: 50px;
                .send_span{
                    border-radius: 100%;
                    bottom: -80px;
                    right: 40px;
                    width: 40px;
                    height: 40px;
                    background-color: #82E0AA;
                    position: absolute;
                    align-items: center;
                    cursor: pointer;
                .send_image{
                    position: relative;
                    height: 25px;
                    width: 25px;
                    margin: 7px;
                }
            }
            }
        }
    }
`

const Companies = styled.div`
    position: relative;
    width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px;
    align-items: center;
    .company{
        margin-left: 30px;
    }
    .company_details{
        position: relative;
        align-items: center;
        right: 500px;
        display: flex;
        justify-content: center;
        .div_one{
            position: relative;
            .company_icon{
                width: 25px;
                height: 25px;
            }
        }
        .div_two{
            position: relative;
            width: 7vw;
            h4{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #641C1C;
                
            }
        }
        .div_three{
            position: relative;
            .ask_pitch_deck{
                width: 35px;
                height: 35px;
            }
        }
    }
`

export default PitchDeck