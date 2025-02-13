


import React from 'react'
import UseNewPostData from '../hook/UseNewPostData'
import ShowNewpostData from '../page/ShowNewpostData';





function NewPost() {

  const {refetch,isLoading,error,NewPost} = UseNewPostData();

  // complete new post and post 
  


  if (isLoading) {
    return (
      <div className="w-full border flex justify-center mt-20 ">

        <span className="loading loading-bars loading-md text-center flex justify-center "></span>
      </div>
    );
  }






  return (
    <div className='grid md:grid-cols-3 gap-4 bg-color p-2 grid-cols-1 mt-16'>

      {
        NewPost.map((item,key)=> <ShowNewpostData data={item} key={key}/>)
      }



    </div>
  )


}

export default NewPost