import React, { useState } from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import {
  vehicleSlideShowPlx,
  slideTextPlx,
  vehiclePicPlx
} from '../plxSettings'

const StyledCarInfoDisplay = styled.div`
  position: absolute;
  right: 60vw;
  bottom: 40px;
  width: 35vw;
  height: 75vh;

  .slide-show-plx {
    transform-origin: 100% 50%;
    width: 100%;
    height: 100%;
    
    .slide-show-background {
      background: #FAC943;
      width: 100%;
      height: 100%;
    }
  }

  .slide-text-plx {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;

    .car-text {
      display: flex;
      flex-direction: column;
    }

    button {
      z-index: 1;
    }
  }

  .vehicle-pic-plx {
    opacity: 0;

    #vehicle-img-1 {
      position: absolute;
      bottom: -54px;
      right: -258px;
      transform: scaleX(-1);
      height: 23vh;
    }

    #vehicle-img-2 {
      position: absolute;
      position: absolute;
      bottom: -66px;
      right: -285px;
      height: 34vh;
    }
  }
`;

function CarInfoDisplay() {
  const [selectedVehicleIndex, setSelectedVehicle] = useState(0);
  const vehicles = [
    {
      id: '1',
      name: 'Porsche',
      year: '2019',
      model: '911 Carrera S',
      mpg: '19/24',
      hp: '443',
      zeroToSixty: '3.2',
      img: 'images/silver_car.png',
    },
    {
      id: '2',
      name: 'Land Rover',
      year: '2019',
      model: 'Range Rover Velar',
      mpg: '19/24',
      hp: '397',
      zeroToSixty: '4.2',
      img: 'images/silver_suv.png',
    },
  ];

  const nextVehicle = () => {
    const nextIndex = selectedVehicleIndex + 1;
    const indexToUse = nextIndex === vehicles.length ? 0 : nextIndex;
    setSelectedVehicle(indexToUse);
  };

  const prevVehicle = () => {
    const prevIndex = selectedVehicleIndex - 1;
    const indexToUse = prevIndex < 0 ? vehicles.length - 1 : prevIndex;
    setSelectedVehicle(indexToUse);
  };

  const backArrow = '<--';
  const nextArrow = '-->';
  const selectedVehicle = vehicles[selectedVehicleIndex];
  const imageText = `${selectedVehicle.name} - ${selectedVehicle.model}`;
  
  return (
    
      <StyledCarInfoDisplay className="car-information">
        <Plx
          className='slide-show-plx'
          parallaxData={vehicleSlideShowPlx}
        >
          <div className='slide-show-background' />
        </Plx>
        <Plx
          className='slide-text-plx'
          parallaxData={slideTextPlx}
        >
          <button onClick={prevVehicle}>{backArrow}</button>
          <button onClick={nextVehicle}>{nextArrow}</button>
          <div className='car-text'>
            <span>{selectedVehicle.name}</span>
            <span>{`${selectedVehicle.year}-${selectedVehicle.model}`}</span>
            <span><span>MPG</span>{selectedVehicle.mpg}}</span>
            <span><span>HP</span>{selectedVehicle.hp}</span>
            <span><span>0-60</span>{selectedVehicle.zeroToSixty}</span>
          </div>
        </Plx>
        <Plx
          className='vehicle-pic-plx'
          parallaxData={vehiclePicPlx}
          >
          <img
            className='vehicle-img'
            id={`vehicle-img-${selectedVehicle.id}`}
            src={selectedVehicle.img}
            alt={imageText}
          />
        </Plx>
      </StyledCarInfoDisplay>
  );
}

export default CarInfoDisplay;
