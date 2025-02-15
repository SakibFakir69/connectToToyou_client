import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import usePublicHook from "../Api/usePublicHook";
import UseNewpostHook from "../hook/UseNewpostHook";
import ShowNewpostData from "../page/ShowNewpostData";

function NewPost() {
  const { isLoading, error, newPostData } = UseNewpostHook();

  //  main theme this website

  // here user can post there short message
  // undder 60 length
  // info

  // photo upload  name
  // post name - title
  // message
  // like , fav
  /// post date

  return (
    <div className="">
      {isLoading ? (
        <div className="flex w-full justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <section className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-4 bg-color p-4">

          {newPostData.map((item, key) => (
            <ShowNewpostData data={item} key={key} />
          ))}
        </section>
      )}
    </div>
  );
}

export default NewPost;
