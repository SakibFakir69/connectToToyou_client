import React from "react";
import UsePostData from "../hook/UsePostData";

import ShowPostDataPage from "../page/ShowPostDataPage";




function Post() {
  // add pgaincation and filter
  /// add details page

  const { refetch, isLoading, error, Post } = UsePostData();
  // get this form api and hook
  console.log(Post);

  if (isLoading) {
    return (
      <div className="w-full border flex justify-center mt-20">
        <span className="loading loading-bars loading-md text-center flex justify-center "></span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  console.log(Post);



  return (
    <div className="bg-color min-h-screen px-4 border ">

      <section className="py-4 flex items-center mx-auto justify-center  mt-20 ">

        <div className="w-full sm:[w-60%]  md:w-[70%] relative ">

         
          

          <input
            type="email"
            placeholder="Email"
            className="border bg-transparent border-border py-3 pl-4 pr-[115px] outline-none w-full rounded-md"
          />

          <span className="bg-primary text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group">
            Search
          </span>
          

      
          
        </div>
        <div>
        <select onSelect={"Drop"} className="py-3 px-4">
            <option></option>

          </select>
          
        </div>
      </section>
      {/* implement search option and filter  */}

      <section className="grid md:grid-cols-3 grid-cols-1 gap-4">
        
      {Post.map((item, key) =><ShowPostDataPage data={item} key={key}/> )}
      </section>


    </div>
  );
}

export default Post;
