import React from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import HeaderAdmin from './HeaderAdmin'
import BarChart from './Charts-Graphs/BarChart'
import PieChart from './Charts-Graphs/PieChart'



const Accueil = () => {



    return (
    <Container>
        <NavMenu/>
        <HeaderAdmin />

        <ChartsAndGraphs>
            <BarChart />
            <PieChart />
        </ChartsAndGraphs>

    </Container>
    )
}

// style CSS
const Container = styled.div`

`;



const ChartsAndGraphs = styled.div`

    display: flex;
    justify-content: space-around;
    align-items:center;
    margin-top: 80px;

`;

export default Accueil;