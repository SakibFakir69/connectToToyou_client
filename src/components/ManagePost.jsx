import React, { useEffect, useState } from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook, { useaxiosPublic } from "../Api/usePublicHook";
import Swal from 'sweetalert2'



import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
function ManagePost() {
  // show post user email
  /// add edit , delete option

  // fetures side bar

  const { user } = useAuthMangedHook();
  const useaxiosapi = usePublicHook();
  const queryclient = useQueryClient();

  const { data: myPost = [], isLoading } = useQuery({
    queryKey: ["mypost", user?.email],

    queryFn: async () => {
      const res = await useaxiosapi.get(`/manage-post/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  console.log(myPost);


  const deleteButton = async(id)=>{

   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {

      if (result.isConfirmed) {

       try{
        await useaxiosapi.delete(`/manage-post-delete/${id}`)
        toast.success("Deleted")
       }catch(error)
       {
        toast.error(error.message)
       }

      }
    });
    
    
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
                    <p>UnLike :{item.UnLike}</p>
                    <p>Follow Post : {item.FollowPost}</p>
                  </div>

                  {/* button */}

                  <div className="flex justify-between">
                    <button className="btn btn-primary">Edit</button>
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteButton(item._id)}
                    >
                      Delete
                    </button>
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
