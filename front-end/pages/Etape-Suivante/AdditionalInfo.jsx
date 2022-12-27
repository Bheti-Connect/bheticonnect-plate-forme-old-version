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
        <div className='form'>
                <div className='progressbar'></div>
            <div className='form-container'> 
                <div className='body'>
                    {PageDisplay()}
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
        </div>
    )
}

export default AdditionalInfo;