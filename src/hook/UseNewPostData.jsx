


import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuthMangedHook from './useAuthMangedHook'
import usePublicHook from '../Api/usePublicHook';

function UseNewPostData() {
    const {user} = useAuthMangedHook();
    const useaxiosPublic = usePublicHook();

    const {refetch,isLoading,error,data: NewPost=[]} = useQuery({
        queryKey:[user?.email || "new post"],

        queryFn: async () =>{

            const response = await useaxiosPublic.get('/new-post')

            return response.data;

        }
    })



  return {refetch,isLoading,error,NewPost};
}

export default UseNewPostData