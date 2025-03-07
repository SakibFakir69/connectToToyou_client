import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import LoginUser from "../hook/LoginUser";
function ProfileLayout() {
  const [isopen, setisopen] = useState(false);
  
  const {dataOfuser, isLoading} = LoginUser();
  console.log(dataOfuser);
  const {Image,Name} = dataOfuser;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 flex justify-between items-center bg-violet-500 shadow-md">
        <h2 className="text-lg font-semibold text-white hover:text-stone-200">Profile</h2>
        <i
          onClick={() => setisopen(true)}
          className="ri-menu-line text-2xl cursor-pointer text-white"
        ></i>
      </div>

      <div className="flex flex-1 z-50  ">
        {/* Sidebar */}
        <div
          className={`fixed md:relative top-0 left-0  bg-red-500 text-white w-60 transform transition-transform   duration-300 ease-in-out min-h-screen
            ${
              isopen ? "translate-x-0" : "-translate-x-64"
            } md:translate-x-0 md:w-64 overflow-y-auto`}
        >
          <div className="flex flex-col gap-4 mt-10 px-4">
            <div className="text-lg font-bold">
              <div className="border h-20 w-20 rounded-full">
                <img
                  src={Image || "Not founeded"}
                  className="rounded-full h-full w-full"
                />
              </div>
              <p>{Name}</p>
            </div>

            <NavLink to="/profilepage" className="hover:text-gray-300 flex gap-1 items-center sm:text-xl">
             <IoInformationCircleOutline className="text-green-500 font-semibold"/> Info
            </NavLink>

            <NavLink to="/profilepage/yourpost" className="hover:text-gray-300 flex gap-1 items-center sm:text-xl">
            <MdOutlinePostAdd className="text-yellow-400 font-semibold"/>  My Post
            </NavLink>

            <NavLink
              to="/profilepage/profileupdate"
              className="hover:text-gray-300 flex gap-1 items-center md:text-xl"
            >
              <GrDocumentUpdate className="text-violet-700"/>Profile Update
            </NavLink>

            <NavLink

            className={'flex gap-1 items-center sm:text-xl'}
            
            to={"/profilepage/dashboard"}> <MdOutlineDashboardCustomize className="text-teal-400"/>Dashboard</NavLink>


            <NavLink to="/" className="hover:text-gray-300 flex gap-1 items-center sm:text-xl">
             <IoMdHome className="text-black"/> Home
            </NavLink>

            {/* Close Button on Small Screens */}
            <button
              className="mt-4 bg-white text-red-500 px-3 py-1 rounded-md hover:bg-gray-200 md:hidden"
              onClick={() => setisopen(false)}
            >
              Close
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
