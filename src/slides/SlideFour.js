import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import {
  carColumnPlx,
  slideFourAppPlx,
} from '../plxSettings'

const StyledSlideFour = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  
  .car-column-plx {
    height: 92vh;
    width: 35vw;
    position: absolute;
    bottom: 0;
    left: -35vw;

    .left-column {
      background: #FAC943;
      height: 100%;
      width: 100%;

      #car-img {
        width: 45vw;
        position: absolute;
        top: calc(100% / 2 - 15vh);
        right: -4.5vw;
      }
    }
  }

  .slide-four-app-plx {
    height: 85vh;
    opacity: 0;
    position: absolute;
    left: 28vw;

    #app-screen-img {
      height: 100%;
      border: black solid 3px;
      border-radius: 30px;
    }
  }
`;


function SlideFour() {
  return (
    <StyledSlideFour>
      <Plx
        className='car-column-plx'
        parallaxData={carColumnPlx}
      >
        <div className='left-column'>
          <img id='car-img' src='images/white_car_front.png' alt='white car' />
        </div>
      </Plx>
      <Plx
        className='slide-four-app-plx'
        parallaxData={slideFourAppPlx}
      >
        <img id='app-screen-img' src='images/app_screen_1.png' alt='mobile device screen' />
      </Plx>
    </StyledSlideFour>
  );
}

export default SlideFour;
