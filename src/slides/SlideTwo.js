import React from 'react';
import styled from 'styled-components';
import CarInfoDisplay from './CarInfoDisplay';

const StyledSlideTwo = styled.div`
  height: 100vh;
  width: 100vw;
`;

function SlideTwo() {
  return (
    <StyledSlideTwo>
        <CarInfoDisplay />
    </StyledSlideTwo>
  );
}

export default SlideTwo;