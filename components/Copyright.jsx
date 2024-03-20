'use client';

import React from 'react';

const Copyright = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='flex justify-between pb-10 items-center mt-12 mb-4 cursor-pointer'>
      <div className='text-[12px]'>© 2024 — Copyright</div>
      <div onClick={scrollToTop}><img src="scrollToTop.svg" alt="" /></div>
    </div>
  );
};

export default Copyright;