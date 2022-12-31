import React from 'react'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

const BarChart = () => {


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );


  return (
    <Container>
    <Bar
      data={{
        labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
        datasets: [
          {
            label: 'Visiteur',
            data: [25, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
            ],
            borderWidth: 1
          },
          {
            label: 'Projet',
            data: [15, 50, 10, 51, 50, 45, 70],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgb(255, 159, 64)',
            ],
            borderWidth: 1
          },
          {
            label: 'Entrepreneur',
            data: [15, 51, 40, 31, 26, 75, 50],
            backgroundColor: [
              'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
              'rgb(255, 205, 86)',
            ],
            borderWidth: 1
          },
          {
            label: 'Investisseur',
            data: [35, 89, 30, 71, 76, 25, 10],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgb(75, 192, 192)',
            ],
            borderWidth: 1
          },
        ]

      }}
      height={200}
      width={300}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart Test',
          },
        }
      }}
      />
   </Container>
  )
}

// Style CSS

const Container = styled.div`
    width: 50%;
    margin: auto;
`;

export default BarChart