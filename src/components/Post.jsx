import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import usePublicHook, { useaxiosPublic } from "../Api/usePublicHook";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import { HiMiniHandThumbDown } from "react-icons/hi2";
import { TbFocus2 } from "react-icons/tb";

import { Link } from "react-router";

function Post() {
  // add pgaincation and filter
  /// add details page

  const useaxiosPublic = usePublicHook();
  const limit = 6;

  const [currentPage, setcurrentPage] = useState(1);
  const [search, setsearch] = useState("");

  const { isLoading, data: allPost = [] } = useQuery({
    queryKey: ["allpost", search, currentPage],
    queryFn: async () => {
      const res = await useaxiosPublic.get(
        `all-post?page=${currentPage}&size=${limit}&PostName=${search}`
      );
      console.log(res, "res");

      return res.data;
    },
    keepPreviousData: true,
  });

  const totalCount = allPost?.countDocuments;
  const data = allPost.suffleresult || [];

  console.log(search);

  const count = parseInt(totalCount);
  const totalButton = Math.ceil(count / limit);

  console.log(totalButton);

  // next button

  const nextButton = () => {
    if (currentPage < totalButton) {
      setcurrentPage(currentPage + 1);
    }
    alert("next cliked");
  };

  const prevButton = () => {
    if (currentPage >= 1) {
      setcurrentPage((prev) => prev - 1);
    }
  };
  const setNumber = (num) => {
    setcurrentPage(num);
  };

  // make a sort function aending and descing by date 

  /// [...arr].sort((a,b)=> b.date-a.date)

  return (
    <div className="bg-color min-h-screen px-4 border w-full ">

      <section class="w-full flex justify-center items-center py-2 z-40 fixed backdrop-blur-md ">

        

        <div class="w-1/2  ">

          

          <input
          onChange={(e)=> setsearch(e.target.value)}
          name="name"
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500
          
            
            
            "
            placeholder="Search ....."
            required
          />
         
        </div>
      </section>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-ring  w-28 flex justify-center items-center"></span>
        </div>

      ) : (
        <section>
          <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 gap-2">

            {data?.map((item, key) => (

              <div className="border p-2 bg-white border-stone-200 rounded

              shadow-xl
              hover:shadow-2xl
              hover:shadow-green-200
              
              ">

                <div className="w-full  flex justify-center items-center mx-auto px-5  h-60 ">
                  <img
                    src={item.Image}
                    alt="image"
                    className=" object-contain  w-full flex justify-center items-center mx-auto h-56   "
                  />
                </div>

                <div className="w-full mt-5 sm:mt-0">
                  <div className="flex sm:items-center justify-between w-full">

                    <div className="flex justify-around gap-10">
                      <h1 className="text-[1.2rem] font-bold">
                        {item.PostName}
                      </h1>

                      <span className="text-gray-400"> {item.Date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-3 text-[0.9rem]   relative mb-6 ">
                    {item.Message}
                  </p>

                  {/* here user can share there message */}
                  {/* make a pool like and like  */}

                  <div className="flex  justify-between  md:gap-6">
                    <div className="flex gap-5 ">
                      <div className="cursor-not-allowed  flex items-center gap-[6px] text-gray-400 hover:text-blue-700">
                        <HiMiniHandThumbUp />
                        {item.Like}
                      </div>

                      <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
                        <HiMiniHandThumbDown />
                        {item.UnLike}
                      </div>

                      <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
                        <TbFocus2 />
                        {item.FollowPost}
                      </div>
                    </div>

                    <div className="">
                      <Link
                        to={`/newpost-details/${item._id}`}
                        className="btn flex items-center gap-2 hover:bg-stone-950 hover:text-white transition delay-100 hover:shadow-2xl hover:shadow-emerald-600"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* button */}

          <section className="flex justify-between h-[100px] mt-20">
            <button
              className="btn"
              onClick={prevButton}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            <div className="flex md:gap-5 gap-4">
              {Array.from({ length: totalButton }).map((_, index) => (
                <div key={index}>
                  <button
                    className={`${
                      currentPage === index + 1
                        ? " bg-red-300 btn text-white"
                        : "btn"
                    }`}
                    onClick={() => setNumber(index + 1)}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
            <button
              className="btn"
              onClick={nextButton}
              disabled={totalButton === currentPage}
            >
              Next
            </button>
          </section>
        </section>
      )}
    </div>
  );
}

export default Post;
