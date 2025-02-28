


import React, { useEffect, useState } from 'react'
import useAuthMangedHook from '../hook/useAuthMangedHook'
import { useaxiosPublic } from '../Api/usePublicHook';

function ManagePost() {

  // show post user email 
  /// add edit , delete option 

  // fetures side bar 
  const [ data , setdata ] =useState([]);
  const {user , loading  } = useAuthMangedHook();
  const useaxiosapi = useaxiosPublic();


  useEffect(()=>{

    useaxiosPublic.get(`/mange-post/${user?.email}`)
    .then((res)=>{
      setdata(res?.data)
      console.log(res);
    })
    .catch((error)=>{
      console.log(error.message)
    })

  },[])





  return (
    <div>
      <p>manage post</p>
      

      


    </div>
  )
}

export default ManagePost