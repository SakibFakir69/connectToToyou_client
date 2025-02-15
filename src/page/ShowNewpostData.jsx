import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router";

import { HiMiniHandThumbUp } from "react-icons/hi2";
import { HiMiniHandThumbDown } from "react-icons/hi2";
import { TbFocus2 } from "react-icons/tb";

function ShowNewpostData({ data }) {
  // show latest 20 new added data
  // add pagination

  const { Name,Like,Email,   Category,  Message,Title,PostName,Date,Image,_id,FollowPost,UnLike} = data ;
  // details page show user name age email 

  // user follow 
  // post follow 
  // like and unlike 
  // normal info

  // get this id and use put opration

  console.log(Image);

  const [openthreeDotMenu, setOpenThreeDotMenu] = useState(false);

  return (
    <div className="border m-2 grid bg-white rounded border-stone-500/20 shadow-xl hover:shadow-green-200 delay-150 hover:shadow-2xl">

      <div className="w-full md:min-w-[50%] md:max-w-[80%] relative boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4  lg:h-[490px] md:h-[480px]">

        <div className="w-full md:h-[300px] h-[250px]  flex justify-center items-center mx-auto px-5">

          <img
            src={Image}
            alt="image"
            className=" object-contain  h-full w-full flex justify-center items-center mx-auto  "
          />
        </div>

        <div className="w-full mt-5 sm:mt-0">
          <div className="flex sm:items-center justify-between w-full">
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-[5px]">
              <h1 className="text-[1.2rem] font-bold">{PostName}</h1>

              <span className="text-gray-400"> {Date}</span>
            </div>

           
          </div>

          <p className="text-gray-600 mt-3 text-[0.9rem]   relative mb-6 ">
            {Message}
          </p>

          {/* here user can share there message */}
          {/* make a pool like and like  */}


          <div className="flex  justify-between border md:gap-6">

            <div className="flex gap-5 border">


              <div className="cursor-not-allowed  flex items-center gap-[6px] text-gray-400 hover:text-blue-700">
                <HiMiniHandThumbUp/>
                {Like}
              </div>

              <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
                <HiMiniHandThumbDown/>
                {UnLike}
              </div>

              <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
               <TbFocus2/>
                {FollowPost}
              </div>
          
            </div>

            <div className="border">
              <Link to={`/newpost-details/${_id}`} className="btn flex items-center gap-2 hover:bg-stone-950 hover:text-white transition delay-100 hover:shadow-2xl hover:shadow-emerald-600">
                View Details <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowNewpostData;
