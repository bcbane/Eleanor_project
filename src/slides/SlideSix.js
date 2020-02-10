import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import forwardArrow from '../forwardArrow-white.svg';
import {
  customerPlx,
  yellowBlockPlx,
  slideSixCarPlx,
  slide6TitlePlx,
} from '../plxSettings'

const StyledSlideSix = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .title-text{
    opacity: 0;
    display: flex;
    flex-direction: column;
    font-size: 6vw;
    position: absolute;
    width: 41vw;
    color: #2C3245;
    line-height: 1;
    font-family: 'Bebas Neue', Helvetica, Sans-Serif;
    top: -5vh;
    right: 8vw;
  }

  .desc-text-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45vw;
    height: 4.5vh;
    font-family: 'Helvetica';
    font-size: 1vw;
    position: absolute;
    top: 23vh;
    left: 0.5vw;
  }

  #name-text {
    font-family: 'Helvetica';
    font-size: 0.8vw;
    font-weight: 700;
    position: absolute;
    top: 30vh;
    left: 0.5vw;
  }

  #line-bar {
    width: 100%;
    height: 0.4vh;
    background: #F3F3F3;
    position: absolute;
    top: 36vh;
  }

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

  #arrow-message {
    font-family: Sans-Serif;
    font-size: 1vw;
    color: #414b69;
    margin-left: 10px;
    position: absolute;
    top: 38vh;

    .forward-arrow {
      width: 1.5vw;
      margin-left: 5px;
    }
  }
`;

function SlideSix() {
  return (
    <StyledSlideSix>
      <Plx
        className='title-text'
        parallaxData={slide6TitlePlx}
      >
        <span>CUSTOMERS WITH</span>
        <span>THAT NEW CAR SMELL.</span>
        <div className='desc-text-block'>
          <span>With Eleanor I was able to drive a few of my dream cars this year.</span>
          <span>My friends keep asking where all the new cars are coming from :)</span>
        </div>
        <span id='name-text'>Alex Bateman, Interface Designer</span>
        <div id='line-bar'/>
        <div id='arrow-message'>
          <span>Subscribe. Drive. Swap. Download Today</span>
          <img src={forwardArrow} className='forward-arrow' alt='forward Arrow' />
        </div>
      </Plx>
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
