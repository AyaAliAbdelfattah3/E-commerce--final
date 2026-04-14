import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination } from "swiper/modules"; 
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
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-2xl bg-black overflow-hidden  dark:border-purple-800/30 dark:bg-black"
      >
        {/* الصورة الأولى */}
        <SwiperSlide className="overflow-hidden">
          <div className="relative w-full h-[300px] mt-10 md:h-[500px] lg:h-[600px]"> 
            <img
              src={bg1}
              alt="Banner 1"
              className="w-full h-full  object-center dark:brightness-[0.7] transition-all duration-500"
              loading="lazy" 
            />
            <div className="absolute inset-0 dark:bg-[#1a0b2e]/50 pointer-events-none"></div>
          </div>
        </SwiperSlide>

        {/* الصورة الثانية - الآن أصبحت بنفس تنسيق الأولى تماماً */}
        <SwiperSlide className="overflow-hidden">
          <div className="relative w-full h-[300px] mt-10  md:h-[500px] lg:h-[600px]"> 
            <img
              src={bg2}
              alt="Banner 2"
              className="w-full h-full object-cover object-center dark:brightness-[0.7] transition-all duration-500"
              loading="lazy" 
            />
            <div className="absolute inset-0 dark:bg-[#1a0b2e]/50 pointer-events-none"></div>
          </div>
        </SwiperSlide>

        {/* الصورة الثالثة */}
        <SwiperSlide className="overflow-hidden">
          <div className="relative w-full h-[300px] mt-10  md:h-[500px] lg:h-[600px]"> 
            <img
              src={bg3}
              alt="Banner 3"
              className="w-full h-full object-cover object-center dark:brightness-[0.7] transition-all duration-500"
              loading="lazy" 
            />
            <div className="absolute inset-0 dark:bg-[#1a0b2e]/50 pointer-events-none"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Bannar;