


import React, { useContext } from 'react'
import { MYContext } from '../Context/AuthContext'

function AuthMangedHook() {

    const auth = useContext(MYContext);




  return auth;
}

export default AuthMangedHook