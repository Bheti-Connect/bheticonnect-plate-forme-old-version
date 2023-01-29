import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';

const LineChart = () => {


    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
      );

      const labels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet']

      const data = {
        labels,
        datasets: [
          {
            label: 'Visiteur',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 }) ),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Projet',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }
        ]
      }

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Line Test',
          },
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }


  return (
    <Container>
    <Line
      data={data}
      height={200}
      width={300}
      options={options}
      />
   </Container>
  )
}

// Style CSS

const Container = styled.div`
    width: 40%;
    margin: auto;
    background: white;
    border-radius: 8px;
    padding: 30px;
`;

export default LineChart