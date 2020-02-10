import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import logo from '../logo.svg';
import forwardArrow from '../forwardArrow.svg';

const StyledSlideOne = styled.div`
  position: relative;
  height: 90vh;
  width: 100vw;

  .logo {
    position: absolute;
    left: 5vw;
    top: 20px;
    z-index: 1; 
  }

  .slide-one-message {
    position: absolute;
    z-index: 1;
    top: 10vh;
    left: 5vw;
    display: flex;
    flex-direction: column;

    .call-to-action {
      color: #FFF;
      font-size: 80px;
      font-family: 'Bebas Neue';
    }

    #arrow-message {
      font-family: Sans-Serif;
      font-size: 10px;
      color: #414b69;
      margin-left: 10px;

      .forward-arrow {
        height: 7px;
        margin-left: 5px;
      }
    }
  }

  

  .cars-group {
    position: relative;
    width: 70vw;
    height: 30vh;
    bottom: 160px;

    #silver-car {
      width: 45vw;
      min-width: 300px;
      position: absolute;
      bottom: 0px;
      left: 61px;
    }
    #white-car-1 {
      width: 39vw;
      min-width: 260px;
      transform: scaleX(-1);
      position: absolute;
      bottom: 0px;
      left: -139px;
    }
    #white-car-2 {
      width: 45vw;
      min-width: 300px;
      position: absolute;
      bottom: 15px;
      left: 240px;
    }
  }
  .image-wrapper {
    position: absolute;
    top: 40px;
    right: 80px;
    display: inline-block;
    height: 80vh;

    img {
      height: 100%;
      border: black solid 3px;
      border-radius: 30px;
      box-shadow: -12px 13px 27px -8px rgba(0,0,0,0.77);
    }
  }
  .background-top {
    position: relative;
    background: #FAC943;
    width: 100%;
    height: 80vh;
  }
`;

function SlideOne() {
  return (
    <StyledSlideOne>
      <div className='slide-one-message'>
        <span className='call-to-action'>DRIVE A NEW CAR</span>
        <span className='call-to-action'>WHENEVER YOU WANT</span>
        <div id='arrow-message'>
          <span>Subscribe. Drive. Swap. Download Today</span>
          <img src={forwardArrow} className='forward-arrow' alt='forward Arrow' />
        </div>
      </div>
      <img src={logo} className="logo" alt="Eleanor Logo" />
      <motion.div
        initial={{ x : "-100vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 0.5 }}
        className='background-top'
      />
      <motion.div 
        className='cars-group'
        initial={{ x: "-60vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 0.5 }}
      >
        <img id='white-car-1' src='images/white_car_left.png' alt='white sports car' />
        <img id='white-car-2' src='images/white_car_right.png' alt='white sports car' />
        <img id='silver-car' src='images/silver_car.png' alt='silver sports car' />
      </motion.div>
      <motion.div 
        className='image-wrapper'
        initial={{ x: "100px", opacity: 0 }}
        animate={{ x: "0px", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src='images/app_screen_4.png' alt='mobile device with Eleanor app'/>
      </motion.div>
    </StyledSlideOne>
  );
}

export default SlideOne;
