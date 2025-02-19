


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import usePublicHook from '../Api/usePublicHook'

function useNewAccount() {

    const useaxiosPublic = usePublicHook();


    const {isLoading,data:NewAccount=[]} = useQuery({
        queryKey:['key'],
        queryFn: async ()=>{
            const res = await useaxiosPublic.get('/new-account')

            return res.data;
        }
    })



  return {isLoading,NewAccount}; 
}

export default useNewAccount