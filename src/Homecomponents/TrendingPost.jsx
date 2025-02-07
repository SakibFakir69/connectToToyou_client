import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TrendingPost() {



  return (
    <div className="p-6">

        {/* find trending post by top like post  */}
        {/* 10 data show here */}


      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Trending Posts</h2>
      </div>

      <section className="h-[400px] border flex justify-center items-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="h-40 flex justify-center"
        >
          <SwiperSlide className="bg-blue-300 p-10 text-center">01</SwiperSlide>

          <SwiperSlide className="bg-red-300 p-10 text-center">02</SwiperSlide>
          <SwiperSlide className="bg-green-300 p-10 text-center">
            03
          </SwiperSlide>
          <SwiperSlide className="bg-yellow-300 p-10 text-center">
            04
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default TrendingPost;
