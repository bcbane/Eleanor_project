import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import {
  appPlx,
  mapPlx,
  slideThreeCarPlx,
  slide3DescPlx,
  slide3TitlePlx,
} from '../plxSettings'

const StyledSlideThree = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .title-text{
    opacity: 0;
    display: flex;
    flex-direction: column;
    font-size: 6vw;
    position: absolute;
    width: 40vw;
    color: #2C3245;
    line-height: 1;
    font-family: 'Bebas Neue', Helvetica, Sans-Serif;
    top: 17vh;
    left: 5vw;
  }

  .desc-text-block {
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45vw;
    height: 9vh;
    font-family: 'Helvetica';
    font-size: 1vw;
    position: absolute;
    top: 5vh;
  }

  .map-plx {
    opacity: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 90%;
    width: 55vw;

    #map-img {
      width: 100%
    }
  }

  .app-plx {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 18vw;
    height: 85vh;

    #app-img {
      height: 100%;
    }
  }

  .slide-tree-car-plx{
    opacity: 0;
    position: absolute;
    bottom: 14vh;
    left: 4vw;

    #car-img {
      width: 40vw;
    }
  }
`;

function SlideThree() {
  return (
    <StyledSlideThree>
      <Plx
        className='title-text'
        parallaxData={slide3TitlePlx}
      >
        <span>DELIVERED TO</span>
        <span>YOUR DOOR.</span>
        <Plx
          className='desc-text-block'
          parallaxData={slide3DescPlx}
        >
          <span>Eleanor works with your schedule to have a</span>
          <span>white-glove delivery service deliver your new</span>
          <span>vehicle right to your door. Your live vehicle</span>
          <span>concierge is available to answer questions 24/7.</span>
        </Plx>
      </Plx>
      <Plx
        className='map-plx'
        parallaxData={mapPlx}
      >
        <img id='map-img' src='images/map_route.png' alt='map of route' />
      </Plx>
      <Plx
        className='app-plx'
        parallaxData={appPlx}
      >
        <img id='app-img' src='images/app_screen_2.png' alt='mobile device with Eleanor app' />
      </Plx>
      <Plx
        className='slide-tree-car-plx'
        parallaxData={slideThreeCarPlx}
      >
        <img id='car-img' src='images/silver_car.png' alt='silver sports car' />
      </Plx>
    </StyledSlideThree>
  );
}

export default SlideThree;
