import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import style from '../css/BannerList.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const BannerList = () => {
  return (
    <section className={StylePropertyMap.BannerList}>
      <h2 aria-hidden>배너리스트</h2>
      <Swiper
        slidesPerView={1}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className={style.bannerList}
      >
        <SwiperSlide>
          <div className={style.list}>
            <p>배너 제목1</p>
            <img src="/img/Img_bg1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.list}>
            <p>배너 제목2</p>
            <img src="/img/Img_bg2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.list}>
            <p>배너 제목3</p>
            <img src="/img/Img_bg3.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="btnPrev">이전</button>
      <button className="btnNext">다음</button>
    </section>
  );
};

export default BannerList;
