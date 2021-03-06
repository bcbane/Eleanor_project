import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import {
  carColumnPlx,
  slideFourAppPlx,
  slide4DescPlx,
  slide4TitlePlx,
} from '../plxSettings'

const StyledSlideFour = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .title-text{
    opacity: 0;
    display: flex;
    flex-direction: column;
    font-size: 6vw;
    position: absolute;
    width: 42vw;
    color: #2C3245;
    line-height: 1;
    font-family: 'Bebas Neue', Helvetica, Sans-Serif;
    top: 24vh;
    right: 3vw;
  }

  .desc-text-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45vw;
    height: 10vh;
    font-family: 'Helvetica';
    font-size: 1vw;
    position: absolute;
    top: 2vh;
  }
  
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
    height: 78vh;
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
        className='title-text'
        parallaxData={slide4TitlePlx}
      >
        <span>DRIVE UNTIL YOU WANT</span>
        <span>SOMETHING NEW.</span>
        <Plx
          className='desc-text-block'
          parallaxData={slide4DescPlx}
        >
          <span>Going on a new date this weekend? The Porsche is a great choice.</span>
          <span>Heading to the mountains? We recommend the F-150 Raptor.</span>
          <span>Swap your vehicle as many times as you want, all for the same</span>
          <span>monthly price.</span>
        </Plx>
      </Plx>
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
