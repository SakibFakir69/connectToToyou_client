import React from "react";
import UseAll_User_Data from "../hook/UseAll_User_Data";
import ShowUserAllData from "../page/ShowUserAllData";

function AllUsers() {
  // user can serach others user

  const { isLoading, error, allUser_data } = UseAll_User_Data();

  return (
    <div>
      {isLoading ? (
        <div>
          <p>
            <span className="loading loading-ring loading-lg"></span>
          </p>
          {/* when loading true show this  */}
        </div>
      ) : (
        <div>
          {/* if loading false null or undifine */}

          {allUser_data.length < 0 ? (
            <div>
              <p>No data founed</p>
            </div>
          ) : (
            <div className="bg-color h-screen border-2 border-red-400  py-4 ">

              <div className="py-6 flex w-full justify-center ">

                <input type="text" placeholder="Enter your name " />
              </div>



              {allUser_data.map((item, key) => (
                <ShowUserAllData data={item} key={key} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AllUsers;
