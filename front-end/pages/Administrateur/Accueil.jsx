import React from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import HeaderAdmin from './HeaderAdmin'
import BarChart from './Charts-Graphs/BarChart'



const Accueil = () => {



    return (
    <Container>
        <NavMenu/>
        <HeaderAdmin />

        <ChartsAndGraphs>

            <BarChart />
            
        </ChartsAndGraphs>

    </Container>
    )
}

// style CSS
const Container = styled.div`

`;



const ChartsAndGraphs = styled.div`



`;

export default Accueil;