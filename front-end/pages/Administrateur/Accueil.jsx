import React from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import HeaderAdmin from './HeaderAdmin'



const Accueil = () => {



    return (
    <Container>
        <NavMenu/>
        <HeaderAdmin />

    </Container>
    )
}

// style CSS
const Container = styled.div`

`;

export default Accueil;