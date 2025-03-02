import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";

function ProfileLayout() {
  /// first show selected info

  /// info  | outlet
  // manage post | outlet
  // other info  | outlet
  //  sest inital page

  /// (profile page )
  /// info
  // page

  // page  -> info | outlet
  // layout | outlet

  const [isopen, setisopen] = useState(true);

  return (
    <div>
     

      <section className="border grid grid-cols-12 ">

       <div>
       {isopen && (
          <div className="bg-red-500 w-44 min-h-screen">
            <div className="col-span-4 border">
              <div className="flex flex-col gap-4 mt-10 px-4">
                <div>show profile and name</div>

                <NavLink to={"/profilepage"}>Info</NavLink>

                <NavLink to={"/profilepage/yourpost"}>My Post</NavLink>
                <NavLink to={"/profilepage/profileupdate"}>
                  Profile Update
                </NavLink>
                <NavLink to={"/"}>Home</NavLink>
                <button className="cursor-pointer btn" onClick={()=> setisopen(false)}>Close</button>
              </div>
            </div>
          </div>
        )}
       </div>

        <div className="col-span-8 border">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default ProfileLayout;
