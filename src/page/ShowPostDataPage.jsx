import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

function ShowPostDataPage({ data }) {
  const [openthreeDotMenu, setOpenThreeDotMenu] = useState(false);

  // incrase make favroute and like

  return (
    <div className="border flex items-center justify-between mx-auto">

      <div className="w-full md:min-w-[60%] md:max-w-[90%] relative bg-white boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4">
        <div className="w-full sm:w-[23.5%]">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-bearded-man-looking-camera_23-2148187159.jpg?t=st=1722619967~exp=1722623567~hmac=c60da5db6ff09019a7669117874a5a90fd04fb132355f1558d5067773698dfaa&w=740"
            alt="image"
            className="w-[100%] h-[100px] object-cover sm:rounded-full"
          />
        </div>

        <div className="w-full mt-5 sm:mt-0">
          <div className="flex sm:items-center justify-between w-full">
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-[5px]">
              <h1 className="text-[1.2rem] font-bold">Jerome Bell</h1>
              <span className="text-gray-400"> • 2 week ago</span>
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
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="flex  justify-between">
            <div className="flex gap-5">
              <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                <FaRegHeart />
                22
              </div>
              <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                <FaRegBookmark />
                234
              </div>
              <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                <BiComment />
                185
              </div>
            </div>
            <div>
              <button className="btn flex items-center gap-2 hover:bg-stone-950 hover:text-white transition delay-100 hover:shadow-2xl hover:shadow-emerald-600">View Details <FaArrowRight/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPostDataPage;
