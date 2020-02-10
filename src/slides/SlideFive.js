import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import monthly from '../monthly.svg';
import insurance from '../insurance.svg';
import maintenance from '../maintenance.svg';
import { 
  featureGroupPlx,
  featureOnePlx,
  featureTwoPlx,
  featureThreePlx,
} from '../plxSettings'

const StyledSlideFive = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .feature-group-plx {
    width: 90vw;
    margin: 0vw 5vw 0vw 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: -40vh;

    .feature-one-plx, .feature-two-plx, .feature-three-plx {
      opacity: 0;
    }

    .feature-info {
      width: 28vw;
      height: 28vw;
      background: #F4F4F4;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .info-pic {
        height: 14vh;
      }

      #info-title {
        font-family: 'Bebas Neue';
        font-size: 25px;
        margin: 10px;
      }

      .info-desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 11px;
      }
    }
  }
`;

function SlideFive() {
  return (
    <StyledSlideFive>
      <Plx
        className='feature-group-plx'
        parallaxData={featureGroupPlx}
      >
        <Plx
          className='feature-one-plx'
          parallaxData={featureOnePlx}
        >
          <div className='feature-info'>
            <img src={monthly} className="info-pic" alt="coin" />
            <span id='info-title'>SIMPLE MONTHLY PLANNING</span>
            <div class='info-desc'>
              <span>No more restricting leases or loans. Simple</span>
              <span>month-to-month pricing. No hidden fees!</span>
            </div>
          </div>
        </Plx>
        <Plx
          className='feature-two-plx'
          parallaxData={featureTwoPlx}
        >
          <div className='feature-info'>
            <img src={insurance} className="info-pic" alt="document" />
            <span id='info-title'>VEHICLE INSURANCE INCLUDED</span>
            <div class='info-desc'>
              <span>That's right, you're protected. All Eleanor plans</span>
              <span>include full insurance coverage.</span>
            </div>
          </div>
        </Plx>
        <Plx
          className='feature-three-plx'
          parallaxData={featureThreePlx}
        >
          <div className='feature-info'>
            <img src={maintenance} className="info-pic" alt="tool" />
            <span id='info-title'>MAINTENANCE IS COVERED</span>
            <div class='info-desc'>
              <span>Leave it to us. Don't worry about maintaining</span>
              <span>your vehicle. Eleanor covers that as well.</span>
            </div>
          </div>
        </Plx>
      </Plx>
    </StyledSlideFive>
  );
}

export default SlideFive;
