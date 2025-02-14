


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import usePublicHook from '../Api/usePublicHook'

function UseNewpostHook() {

    const useaxiosPublic= usePublicHook();

    const {isLoading,error,data:newPostData=[]} = useQuery({

        queryKey:['data'],
        queryFn:async () =>{

            const res = await useaxiosPublic.get('/new-post')
            return res.data;

        }

    })


  return {isLoading,error,newPostData};
}

export default UseNewpostHook