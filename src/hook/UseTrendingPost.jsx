




import { useQuery } from '@tanstack/react-query'
import React from 'react'
import usePublicHook from '../Api/usePublicHook'

function UseTrendingPost() {

    const useaxiosPublic = usePublicHook();


    const {isLoading,data:trendingPost=[]} = useQuery({
        queryKey:['data'],
        queryFn: async () =>{
            const res = await useaxiosPublic.get(`/trending-post`)

            return res.data.result
            ;
        }
    })
    console.log(trendingPost);



  return {isLoading,trendingPost}
}

export default UseTrendingPost