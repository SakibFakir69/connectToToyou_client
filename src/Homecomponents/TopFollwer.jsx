import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { easeIn, motion } from "motion/react"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useTopFollwer from "../hook/useTopFollwer";

function TopFollwer() {

  const { isLoading, TopFollwer } = useTopFollwer();

  console.log(TopFollwer,"top follwer");

  return (
    <div className=" p-4 bg-red-400">


      <section
        // install Swiper modules

        className="grid lg:grid-cols-3   gap-5 p-3 md:grid-cols-2 grid-cols-1 md:h-full "
      

       

        
        
        
      >
        {/* add framer motion */}

        {TopFollwer?.map((item, key) => (

          <div key={key} className="  bg-white ">
            {/* name , follwer , total post , imge */}
            
            <motion.div className="flex flex-col justify-center items-center space-y-3  rounded-md  hover:shadow-2xl shadow-xl bg-gradient-to-br    md:p-4 p-3 "
            initial={{scale:0}}
       
            transition={{duration:0.2}}
            whileInView={{scale:1}}





            
            
            >

              <div className="md:h-22 md:w-22  rounded-full ">
                <img src={item.key} alt={item.Name} className="md:h-4/5 h-20 w-20"/>
              </div>

              <div className=" h-full w-full flex flex-col justify-center mx-auto items-center">
                <p className="flex gap-2 justify-center items-center font-semibold"> <span className="md:text-xl text-sm ">Name</span>

                <span className="md:text-xl text-sm">{item.Name}</span> 
                </p>


                <p className="flex  gap-2 font-semibold justify-center items-center"> <span className="md:text-xl text-sm ">Follower </span>{item.Follow || 0}</p>

                <p className="flex gap-2 items-center"> <span className="md:text-xl font-semibold">Total Post </span>

                <span className="md:text-xl text-sm font-semibold">{item.Post || 0}</span>
                </p>
              </div>
            </motion.div>


          </div>
        ))}

      </section>


    </div>
  );
}

export default TopFollwer;
