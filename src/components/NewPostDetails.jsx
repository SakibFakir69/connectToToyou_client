import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UsePostData from "../hook/UsePostData";
import { useQuery } from "@tanstack/react-query";
import usePublicHook from "../Api/usePublicHook";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { PiSubtitlesThin } from "react-icons/pi";
import { LuMessageSquareText } from "react-icons/lu";
import { MdDriveFileRenameOutline } from "react-icons/md";

function NewPostDetails() {
  const { id } = useParams();
  const useaxiosPublic = usePublicHook();

  const { data: deatilsData = [] } = useQuery({
    queryKey: ["data", id],
    queryFn: async () => {
      const res = await useaxiosPublic.get(`/details-post/${id}`);

      return res.data;
    },
  });

  const {
    FollowPost,
    UnLike,
    Image,
    Like,
    Name,
    Date,
    Email,
    Category,
    Message,
    Title,
    PostName,
  } = deatilsData[0] || {};

  // Like

  // usemutation
  //new-details-post/:id

  const likehandelButton = async () => {
    const res = await useaxiosPublic.put(`/new-details-post/${id}`);

    if (res.status === 200) {
      alert("liked");
    }

    console.log("liked button cliked");
  };

  //unliked button

  const unlikedButtoon = async () => {
    const res = await useaxiosPublic.put(`/new-details-post-unlike/${id}`);

    if (res.status === 200) {
      alert("liked decremenr");
    }
    console.log("liked decrement cliked");

    console.log("unliked button cliked");
  };

  const followpostButton = async () => {
    const res = await useaxiosPublic.put(`/new-details-post-follow/${id}`);
    if (res.status === 200) {
      alert("follow post");
    }
    console.log("follow post clicked");
  };

  const userfollowButton =async () =>{
    const res = await useaxiosPublic.put(`/new-details-page-user-follow/${id}`)
    
    if(res.status===200)
    {
      alert("user follow done")
    }
    console.log("user follow button cliked")
  }

  if (!deatilsData) {
    return <p>laoding..</p>;
  }

  return (
    <div className="w-full bg-color h-screen">
      {/* div div  */}
      {/* div */}

      <section className=" w-11/12 flex flex-col mx-auto py-10 ">

        <section className="md:flex p-3 bg-white shadow-2xl border border-stone-300/50 rounded-md">
          <div className="  flex-1 px-3 ">
            <img src={Image} className="p-3" />
          </div>

          <div className=" flex-1 ">
            {/* add symbol */}

            <div className="flex flex-col space-y-3 px-4 md:mt-10 md:py-6 py-4">
              <h3 className="text-xl font-semibold flex items-center gap-2"> <MdOutlineSubtitles className="text-green-600"/>{PostName}</h3>

              <p className="font-semibold text-slate-600 flex items-center gap-2"> <PiSubtitlesThin className="text-amber-900 font-semibold size-5"/> {Title}</p>
              <p  className="font-semibold text-slate-600 flex gap-2 items-center"><MdDriveFileRenameOutline className="text-red-400"/>  {Name}</p>
              <p  className="font-semibold text-slate-600 flex gap-2 items-center"><BiCategory className="text-green-400"/>  {Category}</p>
              <p  className="font-semibold text-slate-600 flex gap-2"><LuMessageSquareText className="text-blue-600 size-10"/> {Message}</p>
              <p  className="font-semibold text-slate-600 flex items-center gap-2"> <CiCalendar className="text-violet-500 font-bold size-6"/>  {Date}</p>
            </div>
           
            <div className=" flex gap-10 px-5">
              {/* use  this and make post req */}
              <button onClick={likehandelButton} className="btn md:px-10 px-9 bg-blue-600 text-white">
                Like
              </button>

              <button onClick={unlikedButtoon} className="btn md:px-10 px-9 bg-violet-500 text-white">
                Unlike
              </button>
              <button onClick={followpostButton} className="btn btn-secondary">
                Follow post
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* follow user store  */}
      {/* show top follwer */}

      <div className=" w-full h-[50px] justify-center items-center mx-auto">
        
        <button className="btn px-8 py-3  flex justify-center items-center mx-auto text-white bg-black shadow-xl hover:shadow-stone-500 hover:shadow-2xl" onClick={userfollowButton}>Follow</button>
      </div>

    </div>
  );
}

export default NewPostDetails;
