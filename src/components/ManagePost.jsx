import React, { useEffect, useRef, useState } from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook, { useaxiosPublic } from "../Api/usePublicHook";
import Swal from "sweetalert2";

import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import { setLogLevel } from "firebase/app";

const img_bb_api_key = import.meta.env.VITE_YOUR_CLIENT_API_KEY;

const upload_img = `https://api.imgbb.com/1/upload?key=${img_bb_api_key}`;

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


  const updatePost = async (id) => {
    // convet usequry
    const res = await useaxiosapi.put(`/update-post/${id}`, {
      PostName: postname,
      Category: category,
      Message: message,
      Image: liveimg,
    });
    console.log(res, "server");
    if (res.status === 201) {
      toast.success("update done");
      closeModal;
    }

    console.log(updateDetails);
    document.getElementById("my_modal_5").close();
  };
  console.log(isopen);

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
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/*  method */}
                    <button
                      className="btn"
                      onClick={
                       openModal
                      }
                    >
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
                            <div className="flex flex-col gap-4">
                              <span>Upload image</span>

                              <form onSubmit={imgaeLiveCreate}>
                                <input
                                  onChange={handleFileChange}
                                  name="image"
                                  type="file"
                                  placeholder="Enter your photo"
                                  className="border-dotted h-10 text-center cursor-pointer"
                                />
                                <button type="submit" className="btn">
                                  Uplod
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
                            />

                            <input
                              onChange={(e) => settitle(e.target.value)}
                              type="text"
                              name="title"
                              placeholder="Enter your title"
                            />

                            <textarea
                              onChange={(e) => setmessage(e.target.value)}
                              typeof="text"
                              name="message"
                              placeholder="Enter your message"
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

                          <div>
                            <button
                              disabled={false}
                              className="btn cursor-pointer btn-warning"
                              onClick={() => updatePost(item._id)}
                            >
                              Close
                            </button>

                            <button onClick={closeModal} className="btn btn-primary cursor-pointer">
                              Cancle
                            </button>
                          </div>
                        </div>
                      </dialog>
                    )}

                    {/* delete */}
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
