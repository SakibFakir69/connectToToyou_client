


import React, { useState } from 'react'




import { useQuery } from '@tanstack/react-query';
import usePublicHook from '../Api/usePublicHook';
import UseNewpostHook from '../hook/UseNewpostHook';





function NewPost() {


  const {isLoading,error,newPostData}= UseNewpostHook();

 

 







  return (
    <div>
      {
        newPostData.length
      }


      <section>


      </section>





    


    </div>
  )


}

export default NewPost