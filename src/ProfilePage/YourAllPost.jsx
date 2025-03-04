import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook from "../Api/usePublicHook";
import { MYContext } from "../Context/AuthContext";
import { Link } from "react-router";

function YourAllPost() {
  const { user, loading } = useAuthMangedHook();
  const useaxiospai = usePublicHook();

  const { data: yourPost = [], isLoading } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const res = await useaxiospai.get(`/manage-post/${user?.email}`);

      return res.data;
    },
  });
  console.log(yourPost);

  return (
    <div className="w-full">
      <h1>Total my post {yourPost.length}</h1>

      <Link to={'/mangepost'} className="btn btn-primary fixed">Edit Post</Link>

      <section className=" flex justify-center ">
        <div className="w-4/5 border">
          {/* content gosse here */}

          {isLoading ? (
            <div>
              <span className="loading w-20"></span>
            </div>
          ) : (
            <div>
              {yourPost.length === 0 ? (
                <div>No Data Founeded</div>
              ) : (
                <div className="">
                  <section className="w-10/11">
                    {yourPost.map((item, key) => (
                      <div className=" flex justify-center m-2 p-3 " key={key}>
                        <div
                          className="border p-2 bg-white shadow-xl rounded border-stone-300

                        hover:shadow-[0_0_10px_red] transition
                        
                        duration-200 delay-100
                   

                      
                        
                        
                        
                        "
                        >
                          <img src={item.Image} className="h-48 w-full" />

                          <div>
                            <div className="flex flex-col gap-1 mt-2">
                              <p>{item.PostName}</p>
                              <p>{item.Title}</p>
                              <p>{item.Message}</p>
                            </div>

                            <div className="flex gap-2 mt-2">
                              <p className="flex gap-2">
                                {" "}
                                <i class="ri-thumb-up-line text-green-500"></i>
                                {item.Like}
                              </p>

                              <p className="flex gap-2 justify-center items-center ">
                                <i class="ri-thumb-down-line"></i>
                                {item.UnLike}
                              </p>
                              {/* follow post */}
                              <p className="flex gap-2">
                                <i class="ri-user-follow-line text-red-400 "></i>
                                {item.FollowPost}
                              </p>
                            </div>

                            {/* button */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default YourAllPost;
