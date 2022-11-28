import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBell } from '@fortawesome/free-solid-svg-icons';



const Greeting = () => {

    const day = new Date();
    const hourNow = day.getHours();

    let greet = ''

    if ((hourNow > 18) && (hourNow < 24)) {
        greet = "👍🏾 Bonsoir";
    }   else if ((hourNow > 12) && (hourNow < 18))  {
        greet = "😏 Bon après-midi";
    }   else if ((hourNow > 0) && (hourNow < 13))  {
        greet = "🥳 Bonjour";
    } else {
        greet = " Bienvenue"
    }

    return (
        <GreetMe>
            <div className='greeting_div'>
                <h5>{greet}, Richard</h5>
            </div>
            <div className='briefcase_div'>
                <span>
                    <FontAwesomeIcon icon={faBriefcase} className='icon briefcase' />
                </span>
                <span>
                    <FontAwesomeIcon icon={faBell} className='icon bell' />
                </span>
            </div>
        </GreetMe>
    )
}

const GreetMe = styled.div`
position: absolute;
right: 20px;
width: 400px;
height: 40px;
padding-left: 20px;
background-color: #091a2b;
color: white;
border-radius: 40px;
margin-bottom: 1% ;
display: flex;
    .greeting_div{
        margin-top: -10px;
        width: 80%;
    }
    h5 {
        position: relative;
        font-weight: 700;
        width: 80%;
    }
    .briefcase_div{
        display: inline;
        position: relative;
        width: 50%;
        
        .icon{
            width: 14%;
            margin-left: 5%;
            margin-top: 7% ;
        }
        .bell{
            width: 12%;
        }
        span + span {
            margin-left: 15px;
        }
    }
`

export default Greeting