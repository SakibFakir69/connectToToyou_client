


import React, { useContext } from 'react'
import { MYContext } from '../Context/AuthContext'

function useAuthMangedHook() {

    const auth = useContext(MYContext);




  return auth;
}

export default useAuthMangedHook