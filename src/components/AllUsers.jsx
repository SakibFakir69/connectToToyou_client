import React, { useEffect, useState } from "react";
import usePublicHook from "../Api/usePublicHook";
import { useQuery } from "@tanstack/react-query";

function AllUsers() {
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const useaxiosPublic = usePublicHook();

  const {
    isLoading,
    data: users_Data = { count: 0, result: [] },
    refetch,
  } = useQuery({
    queryKey: ["users", currentPage, search],
    queryFn: async () => {
      const res = await useaxiosPublic.get(
        `/all-user?page=${currentPage}&size=${limit}&Name=${search}`
      );
      return res.data;
    },
    keepPreviousData: true, // Keeps previous data while loading new data
  });

  // Extract count and result
  const countTotalPage = users_Data?.count || 0;
  const User_Data_info = users_Data?.result || [];

  // Calculate total pages
  useEffect(() => {
    setTotalPages(Math.max(Math.ceil(countTotalPage / limit), 1)); // Ensure at least 1 page exists
  }, [countTotalPage]);

  // Handle pagination
  const previousButton = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextButton = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const selectedPage = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="bg-color min-h-screen">
      {/* Search Input */}
      <section className="fixed top-0 left-0 right-0 bg-transparent p-1 backdrop-blur-xl  py-10 ">
        <div className="max-w-md mx-auto ">
          <input
            type="search"
            placeholder="Search User By Name..."
            className="block w-full p-4 pl-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 border mt-8"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-24">
          <p>
            <span className="loading loading-ring loading-lg"></span>
          </p>
        </div>
      )}

      {/* Users List */}
      <section className="py-24 flex flex-col items-center w-full">
        {User_Data_info.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="w-full md:w-1/2 p-4">
            {User_Data_info.map((item, key) => (
              <div key={key} className=" p-2 flex items-center bg-white rounded-md shadow-xl my-4">
                <img
                  src={item.Image}
                  alt="User"
                  className="h-20 w-20 border rounded-full border-stone-800/30"
                />
                <div className="ml-4">
                  <p className="font-semibold">{item.Name}</p>
                  <p className="text-gray-500">{item.Email}</p>
                  <div className="flex gap-5 mt-2">
                    <button className="btn">Follow</button>
                 
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      <div className="w-full flex justify-between p-4">
        <button
          className="btn px-8"
          onClick={previousButton}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`btn hover:bg-red-500 ${currentPage === i + 1 ? "bg-red-500 text-white" : ""}`}
              onClick={() => selectedPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className="btn px-8"
          onClick={nextButton}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllUsers;
