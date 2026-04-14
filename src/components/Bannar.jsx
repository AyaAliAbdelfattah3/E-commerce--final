import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { bg1, bg2, bg3 } from "../assets";

const Bannar = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper rounded-3xl overflow-hidden border border-transparent dark:border-purple-800/30 dark:bg-black"
      >
        <SwiperSlide>
          <img
            src={bg1}
            className="  w-full h-auto aspect-video md:aspect-[21/9] object-contain dark:brightness-[0.7] dark:grayscale-[0.2] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-transparent dark:bg-[#1a0b2e]/50 transition-all duration-500 pointer-events-none"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg2}
            className="w-full h-auto aspect-video md:aspect-[21/9] object-contain dark:brightness-[0.7] dark:grayscale-[0.2] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-transparent dark:bg-[#1a0b2e]/40 transition-all duration-500 pointer-events-none"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg3}
            className="w-full h-auto aspect-video md:aspect-[21/9] object-contain dark:brightness-[0.7] dark:grayscale-[0.2] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-transparent dark:bg-[#1a0b2e]/40 transition-all duration-500 pointer-events-none"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Bannar;
