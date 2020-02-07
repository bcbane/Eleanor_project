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
            <img src={monthly} className="monthly" alt="coin" />
            <span>SIMPLE MONTHLY PLANNING</span>
            <span>No more restricting leases or loans. Simple</span>
            <span>month-to-month pricing. No hidden fees!</span>
          </div>
        </Plx>
        <Plx
          className='feature-two-plx'
          parallaxData={featureTwoPlx}
        >
          <div className='feature-info'>
            <img src={insurance} className="insurance" alt="document" />
            <span>VEHICLE INSURANCE INCLUDED</span>
            <span>That's right, you're protected. All Eleanor plans</span>
            <span>include full insurance coverage.</span>
          </div>
        </Plx>
        <Plx
          className='feature-three-plx'
          parallaxData={featureThreePlx}
        >
          <div className='feature-info'>
            <img src={maintenance} className="maintenance" alt="tool" />
            <span>MAINTENANCE IS COVERED</span>
            <span>Leave it to us. Don't worry about maintaining</span>
            <span>your vehicle. Eleanor covers that as well.</span>
          </div>
        </Plx>
      </Plx>
    </StyledSlideFive>
  );
}

export default SlideFive;
