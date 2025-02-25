

import React from 'react'
import usePublicHook from '../Api/usePublicHook';
import {toast,ToastContainer} from "react-toastify"

function NewsLetter() {

  const useaxiosapi = usePublicHook();






  const handelSubmitfrom= (event)=>{

    event.preventDefault();

    const info = new FormData(event.target);
    const info_form = Object.fromEntries(info);

    const {name, email}  = info_form;

    if(!name){
      toast.error("Enter your name");
      return ;
    }
    if(!email)
    {
      toast.error("Enter your email");

      return ;
    }

    const subcriber={
      name:name,
      email:email,
    }


    useaxiosapi.post('/newletters', subcriber)
    .then((res)=>{
      if(res.status==200)
      {
        toast.success("Thanks for join newsletter")
        event.target.reset();
        
      }
    })
    .catch((error)=>{
      console.log(error.message);
      toast.error("falied");
    })




  }

  return (
    <div className='w-full '>

      {/* add background photo */}
    
      <ToastContainer/>
      
      <div className="px-10 mb-6">
      <div className="px-10 rounded-md    bg-gradient-to-b from-fuchsia-700  to-blue-600 flex  md:flex-row flex-col">

        <div className="text-center  flex-1 flex items-center flex-col">
          <h1 className="text-2xl font-semibold text-white justify-center md:py-8 mt-6">
            {" "}
            Stay Updated with Our Newsletter
          </h1>
          <p className="text-gray-300 text-sm md:-mt-6">
            {" "}
            Subscribe to our newsletter and never miss updates. Just provide
            your name and email to join our community.
          </p>
        </div>

        <form className="flex gap-1 justify-center items-center flex-col flex-1 w-full "  onSubmit={handelSubmitfrom}>

         <div className=" w-10/12 flex flex-col space-y-6 py-8 md:mt-6">
         <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="text-center rounded md:py-3 px-12 py-2"
          />

          {/* <input type="text" /> */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="text-center rounded md:py-3 py-2"
          />
         </div>
          <div className="flex justify-center w-full">
            <button type="submit" className="btn w-1/2  text-xl mb-6  bg-teal-200/10
            
            text-white border-white/30 hover:bg-black">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </div>
        
    



    </div>
  )
}

export default NewsLetter