import React from 'react'
import styled from 'styled-components'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {


    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       datasets: [
         {
           label: 'Test Pie chart',
           data: [12, 19, 3, 5, 2, 3],
           backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)',
           ],
           borderColor: [
             'rgba(255, 99, 132, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)',
           ],
           borderWidth: 1,
         },
       ],
     };

     const options = {
      responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
     }




  return (
    <Container>
      <div className='header'>
        <h3>Contractors folder</h3>
      </div>

      <div className="chart">
        <Doughnut data={data} options= {options}/>
      </div>

      <div className='legend'>
        <p className='incomplete'>Incomplete</p>
        <p className='complete'>Complete</p>
      </div>
    </Container>
  )
}

// style CSS
const Container = styled.div`
  height: 350px;
  width: 15%;
  background: white;
  border-radius: 8px;

  .chart{
    padding-left: 30px;
    padding-right: 30px;
  }

  .header{
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-bottom: 40px;
  }

  .legend{

    margin-top: 30px;
    position: relative;

    p{
      margin-left: 35px;
    }

    .incomplete{
      &::before{
        content:" ";
        position: absolute;
        background: gray;
        width: 20px;
        height: 20px;
        left: 10px ;
        border-radius: 50px;
        margin-top: 2px;
      }
    }

    .complete{
      &::before{
        content:" ";
        position: absolute;
        background: blue;
        width: 20px;
        height: 20px;
        left: 10px ;
        border-radius: 50px;
        margin-top: 2px;
      }
    }

  }

`;

export default DoughnutChart