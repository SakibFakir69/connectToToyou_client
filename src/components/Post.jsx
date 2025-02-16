import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import usePublicHook, { useaxiosPublic } from "../Api/usePublicHook";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import { HiMiniHandThumbDown } from "react-icons/hi2";
import { TbFocus2 } from "react-icons/tb";


import { Link } from "react-router";

function Post() {
  // add pgaincation and filter
  /// add details page

  const useaxiosPublic = usePublicHook();
  const limit = 6;

  const [currentPage, setcurrentPage] = useState(1);
  const [search, setsearch] = useState("");

  const [ totalButton , settotalButton ]  = useState(1);


  const { data: allPost = [] } = useQuery({
    queryKey: ["allpost",search,currentPage],
    queryFn: async () => {
      const res = await useaxiosPublic.get(
        `all-post?page=${currentPage}&size=${limit}&PostName=${search}`
      );
      console.log(res, "res");

      return res.data;
    },
    keepPreviousData : true
  });


  const totalCount = allPost?.countDocuments;
  const data = allPost.suffleresult || [];

  console.log(search);

  useEffect(()=>{
    const count = parseInt(totalCount);
    const ans =Math.ceil(count/limit);
    settotalButton(ans);

  },[search,currentPage]);


  console.log(totalButton);



  return (
    <div className="bg-color min-h-screen px-4 border w-full ">
      <section className="py-4 flex items-center mx-auto justify-center  mt-20 ">
        <div className="w-full sm:[w-60%]  md:w-[70%] relative ">
          <input
            type="email"
            placeholder="Email"
            onChange={(e)=> setsearch(e.target.value)}
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

      <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">

        {
          data?.map((item,key)=>(
            
            <div className="w-full md:min-w-[50%] md:max-w-[80%] relative boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4  lg:h-[490px] md:h-[480px] bg-white justify-center items-center mx-auto m-2 border border-stone-200/60">

            <div className="w-full md:h-[300px] h-[250px]  flex justify-center items-center mx-auto px-5 border">
    
              <img
                src={item.Image}
                alt="image"
                className=" object-contain  h-full w-full flex justify-center items-center mx-auto  "
              />
            </div>
    
            <div className="w-full mt-5 sm:mt-0">
              <div className="flex sm:items-center justify-between w-full">
                <div className="flex sm:flex-row flex-col sm:items-center sm:gap-[5px]">
                  <h1 className="text-[1.2rem] font-bold">{item.PostName}</h1>
    
                  <span className="text-gray-400"> {item.Date}</span>
                </div>
    
               
              </div>
    
              <p className="text-gray-600 mt-3 text-[0.9rem]   relative mb-6 ">
                {item.Message}
              </p>
    
              {/* here user can share there message */}
              {/* make a pool like and like  */}
    
    
              <div className="flex  justify-between  md:gap-6">
    
                <div className="flex gap-5 ">
    
    
                  <div className="cursor-not-allowed  flex items-center gap-[6px] text-gray-400 hover:text-blue-700">
                    <HiMiniHandThumbUp/>
                    {item.Like}
                  </div>
    
                  <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
                    <HiMiniHandThumbDown/>
                    {item.UnLike}
                  </div>
    
                  <div className="flex items-center gap-[6px] text-gray-400 cursor-not-allowed hover:text-blue-700">
                   <TbFocus2/>
                    {item.FollowPost}
                  </div>
              
                </div>
    
                <div className="">
                  <Link to={`/newpost-details/${item._id}`} className="btn flex items-center gap-2 hover:bg-stone-950 hover:text-white transition delay-100 hover:shadow-2xl hover:shadow-emerald-600">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>


          ))
        }
      </section>


      {/* button */}






      <section className="flex justify-between h-[100px] mt-20">
        <button className="btn">Prev</button>

        <div className="flex md:gap-5 gap-4">
          {
            Array.from({length:totalButton}).map((_, index)=>(
              <div key={index}>
                <button className="btn">{index+1}</button>

              </div>
            ))
          }
        </div>
        <button className="btn">Next</button>

      </section>
    
    </div>
  );
}

export default Post;
