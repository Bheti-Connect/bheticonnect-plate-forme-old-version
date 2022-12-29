import React from 'react';
import * as Components from '../MoreInformation';
import styled from 'styled-components';



const StepOne = () => {
    return (
        <Div className='step_one_container'>
            <Components.Input className='one' type='text' placeholder='Votre fonction' />
            <Components.Input className='vehicule' type='text' placeholder="Nom du véhicule" />
            <Components.Input type='text' placeholder='Website' />
            <Components.Input type='text' placeholder="Pays d'activité " />
            <Components.Input type='text' placeholder="Niveau d'intérêt"/>
            <div className='hide_vehicule'>
                Nom de votre fonds d'investissement. 
                Si vous êtes un Business Angel, indiquez simplement Business Angel.
            </div>
        </Div>
    )
}

const Div = styled.div`
.hide_vehicule {
    display: none;
}

.vehicule:hover + .hide_vehicule {
    display: block;
    color: red;
}



`

export default StepOne