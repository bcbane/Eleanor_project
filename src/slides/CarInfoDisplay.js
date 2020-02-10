import React, { useState } from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import backArrow from '../backArrow.svg';
import fowardArrow from '../forwardArrow.svg';
import mpg from '../mpg.svg';
import hp from '../hp.svg';
import sixty from '../sixty.svg';

import {
  vehicleSlideShowPlx,
  slideTextPlx,
  slide2TitlePlx,
  slide2DescPlx,
  vehiclePicPlx,
} from '../plxSettings'
import VehicleImg from './VehicleImg'

const StyledCarInfoDisplay = styled.div`
  position: absolute;
  right: 60vw;
  bottom: 40px;
  width: 35vw;
  height: 75vh;

  .title-text{
    opacity: 0;
    display: flex;
    flex-direction: column;
    font-size: 6vw;
    position: absolute;
    top: -20vh;
    right: -52vw;
    width: 40vw;
    color: #2C3245;
    line-height: 1;
    font-family: 'Bebas Neue', Helvetica, Sans-Serif;
  }

  .desc-text-block {
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45vw;
    height: 7vh;
    font-family: 'Helvetica';
    font-size: 1vw;
    position: absolute;
  }

  .arrow-wrapper {
    position: absolute;
    top: 20px;
    right: 15px;
    display: flex;
    flex-direction: row;
  }
  .arrow {
    width: 2vw;
    padding: 10px;
  }

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
      font-family: 'Bebas Neue', Helvetica, Sans-Serif;
      position: absolute;
      left: -25vw;
      top: 14vh;

      #car-name {
        font-size: 5vw;
      }

      #car-model-year {
        color: #56534F;
        font-size: 1.4vw;
        margin-top: -10px;
      }

      #all-stats {
        margin-top: 7vh;
        height: 10vh;
        display: flex;
        flex-direction: row;
      }

      #left-stats-column {
        margin-top: 0.5vh;
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      #stats-right-column {
        height: 16vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 2vw;
        font-size: 2.4vw;
      }

      #icon-holder {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .car-icon {
        height: 3vh;
      }

      .desc-car {
        font-size: 1.6vw;
      }
      #mpg-text {
        margin-left: -1.6vw;
      }
      #hp-text {
        margin-left: -1.4vw;
      }
      #sixty-text {
        margin-left: -1.5vw;
      }
    }

    button {
      z-index: 1;
    }
  }

  .sliding-cars {
    position: absolute;
    bottom: 0;
    left: 35vw;

    #vehicle-img-1 {
      position: absolute;
      bottom: -6vh;
      left: -29vw;
      transform: scaleX(-1);
      width: 48vw;
    }

    #vehicle-img-2 {
      position: absolute;
      position: absolute;
      bottom: -9vh;
      right: -21vw;
      width: 52vw;
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

  const selectedVehicle = vehicles[selectedVehicleIndex];
  
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
          <div className='arrow-wrapper'>
            <img
              src={backArrow}
              className='arrow'
              id='back-arrow'
              alt='back-arrow'
              onClick={prevVehicle}
            />
            <img
              src={fowardArrow}
              className='arrow'
              id='forward-arrow'
              alt='forward-arrow'
              onClick={nextVehicle}
            />
          </div>

          <div className='car-text'>
            <span id='car-name'>{selectedVehicle.name}</span>
            <span id='car-model-year'>{`${selectedVehicle.year}-${selectedVehicle.model}`}</span>
          <div id='all-stats'>
            <div id='left-stats-column'>
              <div id='icon-holder'>
                <img
                  src={mpg}
                  className='car-icon'
                  alt='gas-tank'
                />
                <span className='desc-car' id='mpg-text'>MPG</span>
              </div>
              <div id='icon-holder'>
                <img
                  src={hp}
                  className='car-icon'
                  alt='graph'
                />
                <span className='desc-car' id='hp-text'>HP</span>
              </div>
              <div id='icon-holder'>
                <img
                  src={sixty}
                  className='car-icon'
                  alt='speedometer'
                />
                <span className='desc-car' id='sixty-text'>0-60</span>
              </div>
            </div>

            <div id='stats-right-column'>
              <span>{selectedVehicle.mpg}</span>
              <span>{selectedVehicle.hp}</span>
              <span>{selectedVehicle.zeroToSixty}</span>
            </div>

          </div>
          
          </div>
        </Plx>
        <Plx 
          className='sliding-cars'
          parallaxData={vehiclePicPlx}
        >
        {
          vehicles.map(vehicle => {
            return (
              <VehicleImg
                key={vehicle.id}
                selectedVehicle={selectedVehicle}
                vehicle={vehicle}
                className='vehicle-img'
                id={`vehicle-img-${vehicle.id}`}
              />
            )
          })
        }
        </Plx>
        <Plx 
          className='title-text'
          parallaxData={slide2TitlePlx}
        >
          <span>SELECT A VEHICLE</span>
          <span>FROM YOUR PHONE.</span>
          <Plx 
            className='desc-text-block'
            parallaxData={slide2DescPlx}
          >
            <span>We have three tiers of luxary vehicles to choose from, each with all-inclusive pricing.</span>
            <span>Once you've picked the car you want to Drive from our lineup, all we need is a driver's</span>
            <span>license and an address to deliver the car. No gimmicks. No hidden fees.</span>
          </Plx>
        </Plx>
      </StyledCarInfoDisplay>
  );
}

export default CarInfoDisplay;
