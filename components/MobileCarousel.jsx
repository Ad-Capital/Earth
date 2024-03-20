'use client';

import React, { createContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import styles from "@/sections/Values/style.module.scss";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

SwiperCore.use();

const MobileCarousel = () => {
  return (
    <div className={styles.Swiper}>
      <Swiper
        className='bg-transparent p-4 flex gap-2'
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
            centeredSlidesBounds: true
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        scrollbar={{ draggable: true }}
        navigation={true}
      >
        <SwiperSlide><img className='mb-4' src="artCard1.svg" alt="Art Card 1" /></SwiperSlide>
        <SwiperSlide><img className='' src="artCard2.svg" alt="Art Card 2" /></SwiperSlide>
        <SwiperSlide><img className='' src="artCard3.svg" alt="Art Card 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MobileCarousel;