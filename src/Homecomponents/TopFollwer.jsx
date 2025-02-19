import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useTopFollwer from "../hook/useTopFollwer";

function TopFollwer() {
  const { isLoading, TopFollwer } = useTopFollwer();

  return (
    <div className="border p-4">
      <h2>Top follwer</h2>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="lg:h-[450px]  md:h-[400px] h-[350px] border 

       

        
        
        "
      >
        {/* {TopFollwer.map((item, key) => (
          <SwiperSlide className="md:h-[350px]  h-[300px] flex border justify-center items-center mx-auto w-full ">
            <div className="text-center border h-full flex items-center justify-center">
              {key}
            </div>
          </SwiperSlide>
        ))} */}

      </Swiper>


    </div>
  );
}

export default TopFollwer;
