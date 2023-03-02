import styled from "styled-components";
import Image from 'next/image'
import user from '../../assets/images/user-image.png'
import send from '../../assets/images/send.png'
import sendPitch from './sendPitch'
// import DropFileInput from "./DropFileInput";
import DropZone from "./DropZone";
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

                    <div>
                        Bonjour, il y a plusieurs façon de 
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
    width: 300px;
    background: #FFF;
    height: 60vh;
    border-radius: 30px;

`

export default PitchDeck