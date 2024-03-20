'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveSection = ({ title, content, isActive, onClick, position, activePosition }) => {
  const isClicked = isActive && position === activePosition;

  const handleClick = () => {
    onClick(title);
  };

  return (
    <div
      className={`interactive-section ${isActive ? 'active' : ''} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick} // Pass title on click
    >
      <h2 style={{
        fontSize: '48px',
        fontWeight: 500,
        lineHeight: '72px',
        letterSpacing: '0em',
        textAlign: 'left',
      }}>{title}</h2>
      {/* Section content */}
    </div>
  );
};

export default InteractiveSection;
