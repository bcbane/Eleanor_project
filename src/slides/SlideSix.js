import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import {
  customerPlx,
  yellowBlockPlx,
  slideSixCarPlx,
} from '../plxSettings'

const StyledSlideSix = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .slide-six-car-plx {
    opacity: 0;
    position: absolute;
    bottom: 8vh;
    left: 0;
    width: 60vw;

    #white-car {
      width: 100%;
    }
  }

  .yellow-block-plx {
    height: 80vh;
    width: 10vw;
    position: absolute;
    left: 5vw;
    bottom: 0px;
    transform-origin: center left;

    #yellow-block {
      background: #FAC943;
      height: 100%;
      width: 100%;
    }
  }

  .customer-plx {
    opacity: 0;
    height: 75vh;
    position: absolute;
    bottom: 20vh;
    left: 5vh;

    #customer-img {
      height: 100%;
      transform: scaleX(-1);
    }
  }
`;

function SlideSix() {
  return (
    <StyledSlideSix>
      <Plx
        className='yellow-block-plx'
        parallaxData={yellowBlockPlx}
      >
        <div id='yellow-block' />
      </Plx>
      <Plx
        className='customer-plx'
        parallaxData={customerPlx}
      >
        <img id='customer-img' src='images/alex.png' alt='customer' /> 
      </Plx>
      <Plx
        className='slide-six-car-plx'
        parallaxData={slideSixCarPlx}
      >
        <img id='white-car' src='images/white_car_right.png' alt='white sports car' />
      </Plx>
    </StyledSlideSix>
  );
}

export default SlideSix;
