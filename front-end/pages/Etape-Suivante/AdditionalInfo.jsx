import { useState } from 'react';
import styled from 'styled-components';
import StepOne from './Form_steps/StepOne';
import StepTwo from './Form_steps/StepTwo';
import StepThree from './Form_steps/StepThree';
import StepFour from './Form_steps/StepFour';

const AdditionalInfo = () => {

    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        
        if( page === 0) {
            return <StepOne />;
        } else if ( page === 1) {
            return <StepTwo />;
        } else if (page === 2) {
            return <StepThree />;
        } else {
            return <StepFour />;
        }
        console.log(page);
    }

    return (
        <Div className='form'>
                <div className='progressbar'></div>
            <div className='form-container'> 
                <div className='body'>
                    {PageDisplay()}
                </div>
                <div className='steps_target'>
                    <div className='latest-controlls'>
                        <div className='control control-1'></div>
                        <div className='control control-2'></div>
                        <div className='control control-3'></div>
                        <div className='control control-4'></div>
                    </div>
                </div>
                <div className='footer'>
                    <button
                        disabled={page == 0}
                        onClick={(e) => {
                            e.preventDefault();
                            setPage((currPage) => currPage - 1)
                        }}
                    >
                        Précédent
                    </button>
                    <button
                        disabled={page == 4}
                        onClick={(e) => {
                            e.preventDefault();
                            setPage((currPage) => currPage + 1)
                        }}
                    >
                        Suivant
                    </button>
                </div> 
            </div>
        </Div>
    )
}

const Div = styled.div`
    button + button{
        margin-top: 5px ;
        margin-left: 50px ;
    }
    .steps_target{
        .latest-controlls{
                display: flex;
                justify-content: center;
                .control{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    margin: .5rem 0.25rem;
                    cursor: pointer;
                }
                .control-1{
                    background-color: #98261C;
                    transform: scale(0.65)
                }
                .control-2{
                    background-color: #98261C;
                    transform: scale(0.65);
                }
                .control-3{
                    background-color: #98261C;
                    transform: scale(0.65);
                }
                .control-4{
                    background-color: #98261C;
                    transform: scale(0.65);
                }
                .page-number {
                    margin: 0px 0px 0px 20px;
                    
                }
                    .suivant:active {
                    box-shadow: 0px 0px 0px 0px;
                    top: 5px;
                    left: 5px;
                    }

                    @media (min-width: 768px) {
                    .suivant {
                        padding: 0.25em 0.75em;
                        }
                    }
            }
    }

`

export default AdditionalInfo;