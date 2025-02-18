




import React from 'react'
import usePublicHook from '../Api/usePublicHook'
import { useQuery } from '@tanstack/react-query';

function useTopFollwer() {

    const useaxiosPublic = usePublicHook();

    const {isLoading,data:TopFollwer} = useQuery({

        queryKey:['key'],
        queryFn: async ()=>{
            const res = await useaxiosPublic.get('top-follwer')
            return res.data;
        }

    })


  return {isLoading,TopFollwer};
}

export default useTopFollwer;