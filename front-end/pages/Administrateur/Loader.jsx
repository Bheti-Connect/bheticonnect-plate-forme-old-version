import React from 'react'
import styled from 'styled-components'

const Loader = () => {



  return (
    <Container>
        <div className="loader">
            <div className="dot"></div>
        </div>
        <div className="loader">
            <div className="dot"></div>
        </div>
        <div className="loader">
            <div className="dot"></div>
        </div>
        <div className="loader">
            <div className="dot"></div>
        </div>
        <div className="loader">
            <div className="dot"></div>
        </div>
        <div className="loader">
            <div className="dot"></div>
        </div>
    </Container>
  )
}

// style css
 const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


 .loader {
  height: 5px;
  width: 1px;
  position: absolute;
  animation: rotate0234 3.5s linear infinite;
}

.loader .dot {
  top: 30px;
  height: 7px;
  width: 7px;
  background: #700b0b;
  border-radius: 50%;
  position: relative;
}

.text {
  position: absolute;
  bottom: -85px;
  font-size: 25px;
  font-weight: 400;
  color: #26aee4;
}

@keyframes rotate0234 {
    30% {
        transform: rotate(220deg);
    }

    40% {
        transform: rotate(450deg);
        opacity: 1;
    }

    75% {
        transform: rotate(720deg);
        opacity: 1;
    }

    76% {
        opacity: 0;
    }

    100% {
        opacity: 0;
        transform: rotate(0deg);
    }
}

    .loader:nth-child(1) {
    animation-delay: 0.15s;
    }

    .loader:nth-child(2) {
    animation-delay: 0.3s;
    }

    .loader:nth-child(3) {
    animation-delay: 0.45s;
    }

    .loader:nth-child(4) {
    animation-delay: 0.6s;
    }

    .loader:nth-child(5) {
    animation-delay: 0.75s;
    }

    .loader:nth-child(6) {
    animation-delay: 0.9s;
    }
 `;

export default Loader