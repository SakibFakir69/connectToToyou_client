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
import UseTrendingPost from "../hook/UseTrendingPost";

function TrendingPost() {

  const { isLoading, trendingPost } = UseTrendingPost();

  return (
    <div className="p-6 bg-white">
      {/* find trending post by top like post  */}
      {/* 10 data show here */}

 

      <section className="h-[400px]  flex justify-center items-center">
        <Swiper
          spaceBetween={20}
         
          breakpoints={{
            648:{slidesPerView:1},

            768:{slidesPerView:2},
            1224:{slidesPerView:3}
            
          }}


          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="md:h-56 flex justify-center 

          lg:h-60

          h-48
          
          "
        >
          {/* like , post ,follow , post name , message */}

          {trendingPost.map((item, key) => (
            <SwiperSlide
              className=" text-center  bg-white   "
              key={key}
            >

              <div className=" w-full flex flex-col items-center justify-center p-4  rounded  py-10 md:py-14">
             
                <h3>{item.PostName}</h3>
                <h3>{item.Title}</h3>
                <p>{item.Message}</p>
                {/* follow , like , unlike */}

                <div className="text-center flex justify-center gap-10 mt-1">
                  <p className="flex justify-center items-center gap-2 text-green-400"> <span>Like</span> <span>{item.Like || 0}</span></p>

                  <p className="flex justify-center items-center gap-2 text-red-500">
                    <span>UnLike </span>
                    
                   <span className=""> {item.UnLike || 0}</span>


                  </p>

                  <p className="flex justify-center items-center gap-2 text-yellow-400">
                    <span> FollowPost</span>
                    
                  <span>  {item. FollowPost 
                  || 0}</span>
                  
                  </p>
                  
                </div>
              
                

              </div>








            </SwiperSlide>
          ))}


        </Swiper>
      </section>
    </div>
  );
}

export default TrendingPost;
