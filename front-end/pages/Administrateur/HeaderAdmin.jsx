import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import avatar from '../../assets/images/avatar.png'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HeaderAdmin = () => {

    const [user, setUser] = useState([
        "Richard",
        "John",
        "Bertrand",
        "Nicola",
        "Michael"
    ])

  return (
    <Container>
    <div className="left">
        <ul>
            <li className='head-text'>Dahsboard</li>
            <li className='welcome'>Welcome back, {user[Math.floor(Math.random()*user.length)]} <span className='hand-icon'>👋</span></li>
        </ul>
    </div>


    <div className="right">
        <div className='notification'>
            <Link to="#" className='icon'>
                <FontAwesomeIcon className='bell-icon' icon={faBell}/>
                <span className='number'>10</span>
            </Link>
        </div>
        <div className='profil'>
            <img src={avatar} className="avatar" alt="avatar profil" />
        </div>
    </div>
    </Container>
  )
}


// Style CSS
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    .left{
        margin-right: 10%;
        ul{
            list-style-type: none;


            .head-text{
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;
            }

            .welcome{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                color: #641C1C;
            }

            .hand-icon{
                font-size: 30px;
            }
        }
    }


    .right{
        display: flex;
        aligh-items: center;
        .profil{
            align-self: center;
            .avatar{
                width: 47px;
                border: 3px solid #641C1C;
                border-radius: 50%;
            }
        }

        .notification{
            align-self: center;
            margin-right: 50px;
            position: relative;
            .icon{
                .bell-icon{
                    font-size: 30px;
                    color: black;
                }
                .number{
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    color: white;
                    top: -7px;
                    left: 15px;
                    background: red;
                    border-radius: 50%;
                    text-align: center;
                    font-size: 11px;
                    font-weight: 600;
                    border: 1px solid white;
                }
            }
        }
    }

`;
export default HeaderAdmin