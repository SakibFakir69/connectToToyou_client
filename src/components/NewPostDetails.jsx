import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UsePostData from "../hook/UsePostData";
import { useQuery } from "@tanstack/react-query";
import usePublicHook from "../Api/usePublicHook";

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
    const res = await useaxiosPublic.put(`new-details-post/${id}`);

    if (res.status === 200) {
      alert("liked");
    }

    console.log("liked button cliked");
  };

  //unliked button

  const unlikedButtoon = async () =>{
    const res = await useaxiosPublic.put(`new-details-post/${id}`);

    if(res.status===200)
    {
        alert("liked decremenr")
    }
    console.log("liked decrement cliked")


    console.log("unliked button cliked")
  }

  const followpostButton =async () =>{


    const res = await useaxiosPublic.put(`/new-details-post-follow/${id}`)
    if(res.status===200)
    {
        alert("follow post")
    }
    console.log("follow post clicked");

  }

  if (!deatilsData) {
    return <p>laoding..</p>;
  }

  return (
    <div className="w-full bg-color h-screen">
      {/* div div  */}
      {/* div */}

      <section className="border w-11/12 flex flex-col mx-auto py-10">
        <section className="md:flex p-3 bg-white shadow-2xl border-red-400">
          <div className=" border flex-1 px-3 ">
            <img src={Image} className="p-3" />
          </div>

          <div className="border flex-1 ">
            {/* add symbol */}

            <div className="flex flex-col space-y-3 px-4 md:mt-10 md:py-6 py-4">
              <h3>{PostName}</h3>
              <p>{Title}</p>
              <p>{Name}</p>
              <p>{Category}</p>
              <p>{Message}</p>
              <p>{Date}</p>
            </div>

            <div className="border flex gap-10 px-5">
              {/* use  this and make post req */}
              <button onClick={likehandelButton} className="btn btn-warning">
                Like
              </button>
              <button onClick={unlikedButtoon} className="btn btn-primary">Unlike</button>
              <button onClick={followpostButton} className="btn btn-secondary">Follow post</button>
            </div>
          </div>
        </section>
      </section>

      {/* follow user store  */}
      <div>
        <button>Follow</button>
      </div>
    </div>
  );
}

export default NewPostDetails;
