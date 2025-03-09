



import React from 'react'
import useAuthMangedHook from '../hook/useAuthMangedHook'
import { Navigate } from 'react-router';

function PrivateRoute({children}) {

    const { user, loading } = useAuthMangedHook();
    if(loading)
        {
            return<div className="flex justify-center items-center min-h-screen">
            <p><span className="loading loading-ring loading-lg py-20"></span></p>
        </div>
        }



    console.log(user,"private route")
    if(user)
    {
        return children;

    }

   
  return <Navigate to={'/account/login'}/>
}

export default PrivateRoute