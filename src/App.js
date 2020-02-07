import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import SlideOne from './slides/SlideOne';
import SlideTwo from './slides/SlideTwo';
import SlideThree from './slides/SlideThree';
import SlideFour from './slides/SlideFour';
import SlideFive from './slides/SlideFive';
import SlideSix from './slides/SlideSix';
import { 
  slideTwoPlx, 
  slideThreePlx,
  slideFourPlx,
  slideFivePlx,
  slideSixPlx,
} from './plxSettings'

const StyledApp = styled.div`
  background: #FFFFFF;
  height: 1100vh;
  
  .sticky-trigger-1 {
    margin-top: 88vh;
  }

  .sticky-trigger-2 {
    margin-top: 300vh;
    height: 190vh;
  }

  .sticky-trigger-3 {
    height: 180vh;
  }

  .sticky-trigger-4 {
    height: 193vh;
  }

  .sticky-slide-1, .sticky-slide-2, .sticky-slide-3, .sticky-slide-4, .sticky-slide-5 {
    position: fixed;
    bottom: 0;
    opacity: 0;
  }
`;

function App() {
  return (
    <StyledApp className="App">
      <SlideOne />
      <div className='sticky-trigger-1' />
      <div className='sticky-trigger-2' />
      <div className='sticky-trigger-3' />
      <div className='sticky-trigger-4' />
      <div className='sticky-trigger-5' />
      <Plx
        className='sticky-slide-5'
        parallaxData={slideSixPlx}
      >
        <SlideSix />
      </Plx>  
      <Plx
        className='sticky-slide-4'
        parallaxData={slideFivePlx}
      >
        <SlideFive />
      </Plx>
      <Plx
        className='sticky-slide-3'
        parallaxData={slideFourPlx}
      >
        <SlideFour />
      </Plx>
      <Plx
        className='sticky-slide-2'
        parallaxData={slideThreePlx}
      >
        <SlideThree />
      </Plx>
      <Plx
        className='sticky-slide-1'
        parallaxData={slideTwoPlx}
      >
        <SlideTwo />
      </Plx>     
    </StyledApp>
  );
}

export default App;
