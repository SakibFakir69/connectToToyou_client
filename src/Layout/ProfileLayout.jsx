import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import useAuthMangedHook from "../hook/useAuthMangedHook";

function ProfileLayout() {
  const [isopen, setisopen] = useState(false);
  const { user, loading } = useAuthMangedHook();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gray-100 shadow-md">
        <h2 className="text-lg font-semibold">Profile</h2>
        <i
          onClick={() => setisopen(true)}
          className="ri-menu-line text-2xl cursor-pointer"
        ></i>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed md:relative top-0 left-0  bg-red-500 text-white w-60 transform transition-transform duration-300 ease-in-out min-h-screen
            ${
              isopen ? "translate-x-0" : "-translate-x-64"
            } md:translate-x-0 md:w-64`}
        >
          <div className="flex flex-col gap-4 mt-10 px-4">
            <div className="text-lg font-bold">
              <div className="border h-16 w-16 rounded-full">
                <img
                  src={user?.photoURL || "Not founeded"}
                  className="rounded-full"
                />
              </div>
              <p>{user?.displayName}</p>
            </div>

            <NavLink to="/profilepage" className="hover:text-gray-300">
              Info
            </NavLink>
            <NavLink to="/profilepage/yourpost" className="hover:text-gray-300">
              My Post
            </NavLink>
            <NavLink
              to="/profilepage/profileupdate"
              className="hover:text-gray-300"
            >
              Profile Update
            </NavLink>
            <NavLink to={"/profilepage/dashboard"}>Dashboard</NavLink>
            <NavLink to="/" className="hover:text-gray-300">
              Home
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
