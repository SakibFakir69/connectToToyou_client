import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router";


function ShowNewpostData({ data }) {
  // show latest 20 new added data
  // add pagination

  const { Name,Like,Email,   Category,  Message,Title,PostName,Date,Image,_id} = data ;
  // details page show user name age email 

  // user follow 
  // post follow 
  // like and unlike 
  // normal info

  // get this id and use put opration

  console.log(Image);

  const [openthreeDotMenu, setOpenThreeDotMenu] = useState(false);

  return (
    <div className="border m-2 grid">
      <div className="w-full md:min-w-[60%] md:max-w-[90%] relative bg-white boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4">
        <div className="w-full md:h-[250px] h-[200px] border">
          <img
            src={Image}
            alt="image"
            className=" object-cover  h-full"
          />
        </div>

        <div className="w-full mt-5 sm:mt-0">
          <div className="flex sm:items-center justify-between w-full">
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-[5px]">
              <h1 className="text-[1.2rem] font-bold">{PostName}</h1>

              <span className="text-gray-400"> {Date}</span>
            </div>

            <div className="relative">
              <BsThreeDots
                className="text-gray-700 text-[1.2rem] cursor-pointer"
                onClick={() => setOpenThreeDotMenu(!openthreeDotMenu)}
              />

              <ul
                className={`${
                  openthreeDotMenu
                    ? "translate-y-0 opacity-100 z-20 h-auto"
                    : "translate-y-[-10px] opacity-0 z-[-1] h-0"
                } transition-all duration-200 bg-white w-max boxShadow py-1 rounded-md absolute top-6 right-0`}
              >
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-gray-600">
                  <FaRegBookmark />
                  Make favorite
                </li>
                {/* make fav click incrase like count  */}
                {/* <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-red-500">
                        <AiOutlineDelete />
                        Delete
                      </li> */}
              </ul>
            </div>
          </div>

          <p className="text-gray-600 mt-3 text-[0.9rem]">
            {Message}
          </p>

          {/* here user can share there message */}
          {/* make a pool like and like  */}


          <div className="flex  justify-between">

            <div className="flex gap-5 ">


              <div className="cursor-not-allowed  flex items-center gap-[6px] text-gray-400 hover:text-blue-700">
                <FaRegHeart />
                {Like}
              </div>

              <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
                <FaRegBookmark />
                Unlike 2
              </div>

              <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
                <FaRegBookmark />
                post follow : 5
              </div>
          
            </div>
            <div>
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
