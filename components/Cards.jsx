'use client';

import { Slider } from '../components';
import styled from 'styled-components';

const StyledElement = styled.div`
  display: block;

  @media (max-width: 640px) {
    display: none;
  }
`;
const StyledElement2 = styled.div`
  display: block;

  @media (min-width: 641px) {
    display: none;
  }
`;

const heroCards = () => (
  <section className="flex justify-center relative">
    <div className="curve">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
      </svg>
    </div>
    <StyledElement>
      <StyledElement className="py-8">
        <Slider />
      </StyledElement>
    </StyledElement>
    <StyledElement2 className="overflow-hidden z-10 py-4 w-full">
      <img src="Group.svg" alt="" className='w-full'/>
    </StyledElement2>
  </section>
);

export default heroCards;