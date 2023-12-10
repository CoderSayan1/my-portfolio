import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../images/weather.png';
import image2 from '../images/bubble.png';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Work() {
  return (
    <div className='mx-auto mb-20 md:mb-32 w-full md:w-3/5 visible' id='work'>
      <div className=''>
        <h1 className='bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-transparent bg-clip-text md:text-4xl text-2xl font-bold mb-6 uppercase flex items-center justify-center'>
          My Projects
        </h1>
        <Swiper
          className='visible mt-[3rem] w-full'
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          <SwiperSlide className='w-[22rem]'>
            <a href='https://codersayan1.github.io/weatherWebsite/' target='_blank'>
              <img src={image1} alt='' className='md:w-[19rem] h-[10rem] md:h-[19rem] rounded-lg md:rounded-2xl' />
            </a>
          </SwiperSlide>
          <SwiperSlide className='w-[20rem]'>
            <a href='https://codersayan1.github.io/BubbleGame/' target='_blank'>
              <img src={image2} alt='' className='md:w-[19rem] h-[10rem] md:h-[19rem] rounded-lg md:rounded-2xl' />
            </a>
          </SwiperSlide>
          <SwiperSlide className='w-[20rem]'>
            <a href='https://codersayan1.github.io/weatherWebsite/' target='_blank'>
              <img src={image1} alt='' className='md:w-[19rem] h-[10rem] md:h-[19rem] rounded-lg md:rounded-2xl' />
            </a>
          </SwiperSlide>
          <SwiperSlide className='w-[20rem]'>
            <a href='https://codersayan1.github.io/BubbleGame/' target='_blank'>
              <img src={image2} alt='' className='md:w-[19rem] h-[10rem] md:h-[19rem] rounded-lg md:rounded-2xl' />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
