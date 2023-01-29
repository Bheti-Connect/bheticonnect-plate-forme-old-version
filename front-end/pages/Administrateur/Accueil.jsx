import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import HeaderAdmin from './HeaderAdmin'
import LineChart from './Charts-Graphs/LineChart'
import DoughnutChart from './Charts-Graphs/DoughnutChart'
import Number from './Charts-Graphs/Number'
import Loader from './Loader'



const Accueil = () => {

    const [load, setLoad] = useState(true)


    useEffect(() => {
        const waiting = setTimeout(() => {
            setLoad(false)
        }, 5000);
  
        return () => {
          clearTimeout(waiting)
        }
      }, [])


    return (
    <Container>
       <NavMenu/>
       <HeaderAdmin />

        {
            load ? (
                <Loader />
            ) : (
                <ChartsAndGraphs>

                    <FirstRow>
                        <LineChart />
                        <DoughnutChart />
                        <Number />
                    </FirstRow>

                    <SecondRow>

                    </SecondRow>

                </ChartsAndGraphs>
            )
        }

    </Container>
    )
}

// style CSS
const Container = styled.div`

`;



const ChartsAndGraphs = styled.div`

    display: flex;
    flex-direction: column;

`;

const FirstRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin-top: 80px;
    width:90%;
`;

const SecondRow = styled.div`


`;


export default Accueil; 