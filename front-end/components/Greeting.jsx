import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';



const Greeting = () => {

    const [name, setName] = useState('');

    const day = new Date();
    const hourNow = day.getHours();

    // notification
    const [data, setData] = useState([
    {"notification" : "Pitch deck 1", "time": "15/12/2022 à 12:32"},
    {"notification" : "Pitch deck 2", "time": "15/12/2022 à 12:32"},
    {"notification" : "Pitch deck 3", "time": "15/12/2022 à 12:32"},
    {"notification" : "Pitch deck 4", "time": "15/12/2022 à 12:32"},
    {"notification" : "Pitch deck 5", "time": "15/12/2022 à 12:32"},
    {"notification" : "Pitch deck 6", "time": "15/12/2022 à 12:32"},
    {"notification" : "Pitch deck 7", "time": "25/12/2025 à 12:32"},
])


const handle = (notif) => {
    console.log(notif)
    }

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

    useEffect(() => {
        // Perform localStorage action
        const data = JSON.parse(localStorage.getItem('user-info'));
        setName(data?.name)
      }, [])

    const toggleMenu = () => {
        if(!document.querySelector('.first ul').classList.contains('menu'))
        {
            document.querySelector('.first ul').classList.remove('hide_menu')
            document.querySelector('.first ul').classList.add('menu')
        }else{
            document.querySelector('.first ul').classList.add('hide_menu')
            document.querySelector('.first ul').classList.remove('menu')
        }
        
    }




    return (
        <GreetMe>
            <div className='greeting_div'>
                <h5>{greet}, {name}</h5>
            </div>
            <div className='briefcase_div'>
                <span className='first' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBriefcase} className='icon briefcase' />
                    <span className='notification_point'>5</span>


                    {/* List notification */}
                    <ul className="hide_menu">
                        {
                        data.map((item, index) => (
                            <li key={index} onClick={() => handle(item)}><a href='#' >{item.notification}</a> <span>{item.time}</span></li>
                        ))
                        }
                        <li className='view_all'><span>Toutes les notifications</span></li>
                    </ul>

                </span>
                <span>
                    <FontAwesomeIcon icon={faBell} className='icon bell' />
                </span>
                <span>
                    <FontAwesomeIcon icon={faPowerOff} className='icon power_off' />
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
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
border-radius: 40px;
margin-bottom: 1%;
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
            margin-top: 7%;
            cursor: pointer;
        }
        .bell{
            width: 12%;
        }
        
        span + span {
            margin-left: 13px;
        }

        .notification_point{
            position: absolute;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 1px solid #FFF;
            background-color: #FF6B6B;
            top: 3px;
            right: 112px;
            color: white;
            font-size: 10px;
            text-align: center;
            user-select: none;
        }

        .first > svg:hover ~ .notification_point {
            animation-name: bounce;
            animation-duration: 1s;
        }


        @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
        transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        transform: translate3d(0,0,0);
        }
        40%, 43% {
        transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
        transform: translate3d(0, -30px, 0);
        }
        70% {
        transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
        transform: translate3d(0, -15px, 0);
        }
        90% {
        transform: translate3d(0,-4px,0);
        }
        }



        .first{
            .menu{
            position: absolute;
            background: #091a2b;
            list-style: none;
            top: 41px;
            right: 97px;
            width: 220%;
            border-radius: 10px;
            display: block;
            z-index: 999;
            user-select: none;
            }

            .hide_menu{
                display: none;
            }
            

            .menu:before{
            position: absolute;
            content: '';
            height: 20px;
            width: 20px;
            background: #1b1b1b;
            right: 20px;
            top: -10px;
            transform: rotate(45deg);
            z-index: -1;
            }


            .menu li a:before{
            position: absolute;
            content: '';
            height: 7px;
            width: 7px;
            border-radius: 50%;
            background: red;
            left: 14px;
            margin-top: 8px;
            }


            .menu li{
            display: flex;
            line-height: 20px;
            padding: 8px 20px;
            cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            justify-content: space-between;

            span{
                color: white;
                font-size: 10px;
            }
            }

            .menu li a{
            color: white;
            text-decoration: none;
            font-size: 14px;
            margin-left: -18px;
            }

            .menu li a:hover , .menu li label:hover{
            color: cyan;
            }

            .view_all span{
                width: 100%;
                margin:auto;
                font-size: 15px !important;
                color : white;
                text-align: center;
                margin-left: -20px;
                padding: 5px;
                font-weight: 700;
                border-top: 1px gray solid;

                &:hover{
                    color: cyan;
                }
            }
        }


    }
`

export default Greeting