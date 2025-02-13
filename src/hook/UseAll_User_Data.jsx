


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuthMangedHook from './useAuthMangedHook'
import usePublicHook, { useaxiosPublic } from '../Api/usePublicHook';

function UseAll_User_Data() {

    const {user} = useAuthMangedHook();

    const useaxiosPublic = usePublicHook();



    // use tanstack query

    const {isLoading, error,data: allUser_data =[]} = useQuery({
        queryKey:['user',user?.email],
        queryFn: async () =>{
            const res = await  useaxiosPublic.get('/all-user')

            return res.data;
        }

    })


  return {isLoading,error,allUser_data };
}

export default UseAll_User_Data