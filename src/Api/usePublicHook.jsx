


import React from 'react'

import axios from 'axios'

export const useaxiosPublic = axios.create({
    baseURL:'https://connect-toyou-server.vercel.app'
})

function usePublicHook() {
    
  return useaxiosPublic;
}

export default usePublicHook