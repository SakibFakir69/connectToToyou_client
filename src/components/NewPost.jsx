


import React, { useState } from 'react'




import { useQuery } from '@tanstack/react-query';
import usePublicHook from '../Api/usePublicHook';
import UseNewpostHook from '../hook/UseNewpostHook';
import ShowNewpostData from '../page/ShowNewpostData';





function NewPost() {


  const {isLoading,error,newPostData}= UseNewpostHook();

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
    <div className='p-4'>
      {
        newPostData.length
      }


      <section className='grid md:grid-cols-3 gap-4'>

        {
          newPostData.map((item,key)=> <ShowNewpostData data={item} key={key}/>)
        }


      </section>





    


    </div>
  )


}

export default NewPost