import React from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import HeaderAdmin from './HeaderAdmin'
import Example from './charts/Example'


const Accueil = () => {



    return (
    <Container>
        <NavMenu/>
        <HeaderAdmin />
        <Example />

    </Container>
    )
}

// style CSS
const Container = styled.div`

`;

export default Accueil;