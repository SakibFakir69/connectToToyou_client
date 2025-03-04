


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuthMangedHook from '../hook/useAuthMangedHook'
import usePublicHook from '../Api/usePublicHook';
import { MYContext } from '../Context/AuthContext';

function YourAllPost() {
  const {user,loading} = useAuthMangedHook();
  const useaxiospai = usePublicHook(); 


  const {data:yourPost=[] ,isLoading}=useQuery({

    queryKey:['data',user?.email],
    queryFn:async()=>{
      const res = await useaxiospai.get(`/manage-post/${user?.email}`)

      return res.data;
    } 


  })
  console.log(yourPost);





  return (
    <div className='w-full'>
      <h1>Total my post {yourPost.length}</h1>


      <section className=' flex justify-center '>
        <div className='w-6/12 '>
        {/* content gosse here */}

        {
          isLoading ? (<div>
            <span className="loading w-20"></span>

          </div>):
          (<div>

          </div>)
        }




        </div>
      </section>









    </div>
  )
}

export default YourAllPost