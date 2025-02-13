import React, { useEffect, useState } from "react";

import ShowUserAllData from "../page/ShowUserAllData";
import usePublicHook from "../Api/usePublicHook";
import { useQuery } from "@tanstack/react-query";
import { all } from "axios";

function AllUsers() {
  // user can serach others user

  const [search, setsearch] = useState("");

  // search

  // start pagination
  const useaxiosPublic = usePublicHook();

  const [data, setdata] = useState([]);

  const [totalpage, settotalpage] = useState(0);
  const [currentPage, setcurrentpage] = useState(1);
  const limit = 8;

  const {
    isLoading,
    data: users_Data = [],
    refetch,
  } = useQuery({
    queryKey: ["data", currentPage, search],
    queryFn: async () => {
      const res = await useaxiosPublic.get(
        `/all-user?page=${currentPage}&size=${limit}&Name=${search}`
      );
      console.log(res, "er");
      return res.data;
    },
  });
  const countTotalPage = users_Data?.count || 0;
  const User_Data_info = users_Data?.result || [];

  console.log(User_Data_info);

  useEffect(() => {
    const count = parseFloat(countTotalPage / limit);
    // have facttion makeit  high using celi
    ///array.from({}).length.map((button))

    const ans = parseInt(Math.ceil(count));
    settotalpage(ans);
    /// get button fome here
  }, [search, currentPage]);

  const perviouseButton = () => {
    if (currentPage > 1) {
      setcurrentpage(currentPage - 1);
    }
    console.log("prev");
  };

  const nextButton = () => {
    if (currentPage < totalpage) {
      // totale page means total button
      setcurrentpage(currentPage + 1);
    }
    console.log("next");
  };

  const selecttedpage = (num) => {
    setcurrentpage(num);
    console.log("selected", num);
  };

  console.log(currentPage);
  console.log(totalpage);
  console.log(search);

  return (
    <div className="bg-color h-screen">
      <section className="">
        <form
          class="w-full mx-auto py-6 backdrop-blur-xl bg-transparent fixed md:p-2 p-4"
          onChange={(e) => setsearch(e.target.value)}
        >
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative max-w-md flex justify-center items-center mx-auto">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search User By Name..."
              required
            />
          </div>
        </form>
      </section>

      <section className="py-24 flex justify-center flex-col w-full ">
        {isLoading ? (
          <div>
            <div>
              <p>loading...</p>
            </div>
          </div>
        ) : (
          <div className=" ">
            {users_Data.length === 0 ? (
              <div>
                <p>data not founede</p>
              </div>
            ) : (
              <div className="md:p-2 p-4">
                {User_Data_info.map((item, key) => (
                  <div
                    key={key}
                    className="border 
           p-2 md:w-1/2 flex items-center justify-center mx-auto mt-4

           border-stone-300/50
          

           rounded-md

           
           bg-white"
                  >
                    <div className="flex  h-24 md:h-28 gap-10 ml-10 items-center w-10/11 ">
                      <div className=" flex-1 h-24 w-24 ">
                        {/* img */}
                        <img
                          src={item.Image}
                          className="   h-20 
                  border  rounded-full border-stone-950/10 md:ml-4 "
                        />
                      </div>

                      <div className="md:mr-4 flex-1">
                        {/* info */}
                        <p>{item.Name}</p>
                        <p>{item.Email}</p>
                        <div className="flex gap-5">
                          <button>Follwer</button>
                          <button>post</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      <div className=" w-full flex justify-between p-4">
        <button
          className="btn px-8"
          onClick={perviouseButton}
          disabled={currentPage === 1}
        >
          prev
        </button>

        <div>
          {Array.from({ length: totalpage }).map((item, key) => (
            <div key={key} className="flex w-full ">
              <button className="btn" onClick={() => selecttedpage(key + 1)}>
                {key + 1}
              </button>
            </div>
          ))}
        </div>

        <button className="btn px-8 " onClick={nextButton}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AllUsers;
