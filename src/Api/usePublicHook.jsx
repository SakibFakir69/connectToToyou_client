


import React from 'react'

import axios from 'axios'

export const useaxiosPublic = axios.create({
    baseURL:'http://localhost:5000'
})

function usePublicHook() {
    
  return useaxiosPublic;
}

export default usePublicHook