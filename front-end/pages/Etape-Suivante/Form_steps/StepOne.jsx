import React from 'react';
import * as Components from '../MoreInformation';
import styled from 'styled-components';



const StepOne = () => {
    return (
        <div className='step_one_container'>
            <Components.Input type='text' placeholder='Votre fonction' />
            <Components.Input type='text' placeholder="Nom du véhicule" />
            <Components.Input type='text' placeholder='Website' />
            <Components.Input type='text' placeholder="Pays d'activité " />
            <Components.Input type='text' placeholder="Niveau d'intérêt"/>
            <div className=''>
                Nom de votre fonds d'investissement. 
                Si vous êtes un Business Angel, indiquez simplement Business Angel.
            </div>
        </div>
    )
}

export default StepOne