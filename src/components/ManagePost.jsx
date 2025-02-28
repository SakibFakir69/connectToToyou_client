import React, { useEffect, useState } from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook, { useaxiosPublic } from "../Api/usePublicHook";

import { useQuery } from "@tanstack/react-query";
function ManagePost() {
  // show post user email
  /// add edit , delete option

  // fetures side bar

  const { user } = useAuthMangedHook();
  const useaxiosapi = usePublicHook();

  const { data: myPost = [], isLoading } = useQuery({
    queryKey: ["mypost", user?.email],

    queryFn: async () => {
      const res = await useaxiosapi.get(`/manage-post/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  console.log(myPost);


  const handelDelete = (id)=>{

    

  }



  return (
    <div className="border">
      <p>manage post {myPost?.length}</p>

      {/* section take contet */}

      {isLoading ? (
        <div className="py-16 border">
          <span className="loading loading-ring  w-32"></span>
        </div>
      ) : (
        <section>
          {myPost.map((item, key) => (

            <div className="border flex justify-center m-2" key={key}>
              <div className="">
                <img src={item?.Image} className="h-48" />

                <div>
                  <p>{item.Title}</p>
                  <p>{item.Message}</p>
                  <div className="flex border gap-2"> 
                    <p>Like :{item.Like}</p>
                    <p>UnLike :{ item.UnLike}</p>
                    <p>Follow Post : {item.FollowPost}</p>




                  </div>

                  {/* button */}
                 
                 <div className="flex justify-between">

                 <button className="btn btn-primary">Edit</button>
                 <button className="btn btn-warning">Delete</button>
                 </div>






                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default ManagePost;
