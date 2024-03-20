'use client';

import React from 'react';
import styled from 'styled-components';

// Styles for HeroSection components
const HeroContainer = styled.section`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const HeroCard = styled.div`

`;

const HeroSection = () => {

  return (
    <HeroContainer>
      <div>
        <div style={{ width: '80vw', display: 'flex', alignItems: 'center',}}>
          {/* This is the first item it's at the center, note that it's z-index is 1 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <div>
              <img src="canyon.svg" alt="" />
            </div>
          </div>

          {/* This is the second item it's at the start, note that it's on the same z-index of 0 as the one immediately below it */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              display: 'flex',
              justifyContent: 'start',
            }}
          >
            <div>
              <img src="farmersMarket.svg" alt="" />
            </div>
          </div>

          {/* This is the third item it's at the end, note that it's on the same z-index of 0 as the one immediately above it */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <div>
              <img src="tower.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};
export default HeroSection;