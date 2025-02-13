


import React from 'react'
import { Query, useQuery } from '@tanstack/react-query'
import useAuthMangedHook from './useAuthMangedHook'
import usePublicHook from '../Api/usePublicHook';


function UsePostData() {
    // passsing data using tanstack query for caching or error founeded
    // refetch
    const {user} = useAuthMangedHook();
    const useaxiosPublic = usePublicHook();

    const {refetch,isLoading,error,data:Post=[]} = useQuery({
        queryKey:['post',user?.email || "post"],
        queryFn:async ()=>{
            const response  = await useaxiosPublic.get('all-post');

            return response.data;
        }

    })




  return {refetch,isLoading,error,Post};
}

export default UsePostData;