import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import {
  appPlx,
  mapPlx,
  slideThreeCarPlx,
} from '../plxSettings'

const StyledSlideThree = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

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
