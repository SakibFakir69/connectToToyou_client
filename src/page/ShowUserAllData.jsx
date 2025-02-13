import React from "react";

function ShowUserAllData({ data }) {
  // this page show info like
  // name , photo ,age
  // total post  , and total like

  console.log(data);

  const { Image, Name, Email } = data;

  return (
    <div className="md:py-10  flex   border bg-white m-2 md:w-1/2 md:justify-center md:items-center md:mx-auto">
        
      <section className="border w-full flex w-/10/11 p-2 gap-6 ml-8">

      <div>
        <img src={Image} className="w-20 h-20 rounded-full border"/>
      </div>

      <div className="md:ml-16 ">
        <div>
            <p>{Name}</p>
            <p>{Email}</p>
        </div>

        <div className="border flex items-center justify-around w-full gap-10">
            <button>follower:{100}</button>
            <button>Post:{10}</button>
        </div>

      </div>

        

      </section>
    </div>
  );
}

export default ShowUserAllData;
