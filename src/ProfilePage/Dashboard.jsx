


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuthMangedHook from '../hook/useAuthMangedHook'

function Dashboard() {

  let {user}=useAuthMangedHook();

  const {data:dashBoardData=[],isLoading}=useQuery({
    queryKey:['data'],
    queryFn: () =>{

    }
    

  })
  

  return (
    <div>
      {/* show all data using grap */}

       

    </div>
  )
}

export default Dashboard