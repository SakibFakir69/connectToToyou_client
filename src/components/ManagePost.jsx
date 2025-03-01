import React, { useEffect, useRef, useState } from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook, { useaxiosPublic } from "../Api/usePublicHook";
import Swal from "sweetalert2";

import {

  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";


const img_bb_api_key = import.meta.env.VITE_YOUR_CLIENT_API_KEY;

const upload_img = `https://api.imgbb.com/1/upload?key=${img_bb_api_key}`;

function ManagePost() {
  // show post user email
  /// add edit , delete option

  // fetures side bar

  const { user } = useAuthMangedHook();
  const useaxiosapi = usePublicHook();
  const queryclient = useQueryClient();

  const { data: myPost = [], isLoading,refetch } = useQuery({
    queryKey: ["mypost", user?.email],

    queryFn: async () => {
      const res = await useaxiosapi.get(`/manage-post/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  
  });
  console.log(myPost);

  const deleteButton = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await useaxiosapi.delete(`/manage-post-delete/${id}`);
          toast.success("Deleted");
          refetch();
        } catch (error) {
          toast.error(error.message);
        }
      }
    });
  };

  // /update-post/:id

  /// update post
  const [postname, setpostname] = useState("");
  const [title, settitle] = useState("");
  const [message, setmessage] = useState("");
  const [img, setimg] = useState("");
  const [category, setcategory] = useState("");

  const [liveimg, setliveimg] = useState("");

  const [upload, setupload] = useState(true);

  const [ submit  , setsubmit ] = useState(true)



  const imgaeLiveCreate = async (e) => {
    e.preventDefault();

    const info = new FormData();

    info.append("image", img);
    console.log(info);

    const res = await axios.post(upload_img, info, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res)

    if (res.data.
      success
      
      ) {
      toast.success("Image upload done")
    }

    setliveimg(res.data?.data?.display_url);

    console.log(res.data?.data?.display_url, "img");
    console.log(res);
    console.log(img);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setimg(file); // Store selected file in state
  };

  const updateDetails = {
    PostName: postname,
    Category: category,
    Title: title,
    Image: liveimg,
  };

  // pass ony by one because backend set this type

  // cancale button
  /// info verfiy
  // disiable button
  const modalRef = useRef(null);

  const [isopen, setisopend] = useState(true);

  const openModal = () => {
    setisopend(true);

    if (modalRef.current) modalRef.current.showModal();
  };
  const closeModal = () => {
    setisopend(false);
    if (modalRef.current) modalRef.current.close();
  };

  // const updatePost = async (id) => {
  //   // add real time update 
  //   // convet usequry

  //   // 

  //   if (postname.length <= 4) {
  //     toast.error("Post name must be 5 length");
  //     return;
  //   }
  //   if (title.length <= 8) {
  //     toast.error("Title name must be 8 length upper");
  //     return;
  //   }
  //   if (!(message.length > 20 &&  50>message.length )) {
  //     toast.error("Message must be 20 word to under 50 word");
  //     return;
  //   }






  //   const res = await useaxiosapi.put(`/update-post/${id}`, {
  //     PostName: postname,
  //     Category: category,
  //     Message: message,
  //     Image: liveimg,
  //   });
  //   console.log(res, "server");
  //   if (res.status === 201) {
  //     toast.success("update done");
  //     closeModal;
  //     refetch();
      
  //   }

  //   console.log(updateDetails);
  //   document.getElementById("my_modal_5").close();
  // };
  const queryClient =  useQueryClient();


  const mutation = useMutation(

    async (updatedPost) => {

      return await useaxiosapi.put(`/update-post/${updatedPost.id}`, updatedPost);
    },
    {
      onSuccess: () => {
        document.getElementById("my_modal_5").close();
        queryClient.invalidateQueries(["mypost"]); // Ensures fresh data is fetched
      },
    }
  );

 
  
  const updatePost = (id) => {

    if (postname.length <= 4) {
      toast.error("Post name must be 5 length");
      return;
    }
    if (title.length <= 8) {
      toast.error("Title name must be 8 length upper");
      return;
    }
    if (!(message.length > 20 && message.length < 50)) {
      toast.error("Message must be 20 to 50 words");
      return;
    }
  
    mutation.mutate({
      id,
      PostName: postname,
      Category: category,
      Message: message,
      Image: liveimg,
    });
  };
  
  console.log(isopen);
  console.log(liveimg);


  // relame time update and validation 

  return (
    <div className=" bg-stone-200 min-h-screen">
  

      {/* section take contet */}
      <ToastContainer/>

      {isLoading ? (
        <div className="py-16 border w-full flex justify-center">
          <span className="loading loading-ring  w-20"></span>
        </div>
      ) : (
        <section className="">
          {myPost.map((item, key) => (
            <div className="border flex justify-center m-2 p-3 " key={key}>
              <div className="border p-2 bg-white shadow-xl rounded border-stone-300">
                <img src={item.Image} className="h-48 w-full" />

                <div>

               <div className="flex flex-col gap-1 mt-2">
               <p>{item.PostName}</p>
                  <p>{item.Title}</p>
                  <p>{item.Message}</p>
               </div>

                  <div className="flex gap-2 mt-2">
                    <p className="flex gap-2"> <i class="ri-thumb-up-line text-green-500"></i>{item.Like}</p>

                    <p className="flex gap-2 justify-center items-center "><i class="ri-thumb-down-line"></i>{item.UnLike}</p>
                    {/* follow post */}
                    <p className="flex gap-2"><i class="ri-user-follow-line text-red-400 "></i>{item.FollowPost}</p>
                  </div>

                  {/* button */}

                  <div className="flex justify-between w-6/12">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/*  method */}
                    <button className="md:px-12 px-10 md:py-2.5 py-2 bg-orange-700 text-xl  rounded text-white hover: bg-orange-700720 hover:text-black duration-300 delay-200 cursor-pointer  m-2 " 
                    
                    onClick={openModal}>
                      {/* add  */}
                      <i class="ri-pencil-line"></i>
                      Edit
                    </button>

                    {isopen && (
                      <dialog
                        ref={modalRef}
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box flex flex-col ">
                          <div className="flex flex-col">
                            <div className="flex flex-col gap-4 justify-center">
                              <span className="text-xl font-semibold">
                                Upload image
                              </span>

                              <form
                                onSubmit={imgaeLiveCreate}
                                className="flex  items-center gap-2"
                              >
                                <input
                                  onChange={handleFileChange}
                                  name="image"
                                  type="file"
                                  placeholder="Enter your photo"
                                  className="border-dotted h-10 text-center  rounded cursor-pointer"
                                />

                                <button
                          
                                  type="submit"
                                  className="md:px-8 px-7 py-2.5 md:py-3  text-white btn btn-primary hover:bg-emerald-400/15 hover:text-black"
                                >
                                  Upload
                                </button>
                              </form>
                            </div>
                          </div>

                          <div className="flex flex-col gap-4 mt-4 md:space-y-4 space-y-2">
                            <input
                              onChange={(e) => setpostname(e.target.value)}
                              type="text"
                              name="postname"
                              placeholder="Enter your Post name"
                              className="min-h-[50px] rounded  text-left px-2"
                            />

                            <input
                              onChange={(e) => settitle(e.target.value)}
                              type="text"
                              name="title"
                              placeholder="Enter your title"
                              className="min-h-[50px] rounded  text-left px-2"
                            />

                            <textarea
                              onChange={(e) => setmessage(e.target.value)}
                              typeof="text"
                              name="message"
                              placeholder="Enter your message"
                              className="rounded min-h-[60px] text-left px-2"
                            />

                            <select
                              onChange={(e) => setcategory(e.target.value)}
                              id="category"
                              name="Category"
                              class="bg-gray-50 border border-gray-300 text-gra y-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                            >
                              <option selected="">Select category</option>
                              <option value="Politics">Politics</option>
                              <option value="Movi">Movie</option>
                              <option value="News">News</option>
                              <option value="Latest tools">Latest tools</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>

                          <div className="flex justify-between">
                            <button
                            
                              className="btn cursor-pointer px-6 py-2.5 bg-blue-600 md:px-8 md:py:3 hover:bg-teal-400/10 text-white hover:text-black"
                              onClick={() => updatePost(item._id)}
                            >
                              Submit
                            </button>

                            <button
                              onClick={closeModal}
                              className="btn bg-violet-600 cursor-pointer px-6 py-2.5 md:px-8 md:py:3 text-fuchsia-50 hover:bg-transparent hover:text-black duration-300 delay-150 transition"
                            >
                              Cancle
                            </button>
                          </div>
                        </div>
                      </dialog>
                    )}

                    {/* delete */}
                    <button
                      className="md:px-12 px-10 md:py-2 py-1 border bg-black hover:bg-red-600 border-white/30  cursor-pointer transition delay-150 duration-300 text-white font-semibold  ml-3 m-2 rounded flex gap-2 items-center text-xl"
                      onClick={() => deleteButton(item._id)}
                    >
                      <i class="ri-delete-bin-line"></i> Delete
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
