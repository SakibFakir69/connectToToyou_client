


import React from 'react'
import { Outlet } from 'react-router'

function ProfileLayout() {

    /// first show selected info 
    

    /// info  | outlet 
    // manage post | outlet
    // other info  | outlet 
    //  sest inital page 

    /// (profile page )
     /// info 
        // page 
    

     // page  -> info | outlet 
     // layout | outlet 



  return (
    <div>

        <section className='border grid grid-cols-12 '>

            <div className='col-span-4 border'>
                <li>Info</li>
                <li>Mange post</li>
                <li>Setting</li>

            </div>

            <div className='col-span-8 border'>


                <Outlet/>
            </div>



        </section>




    </div>
  )
}

export default ProfileLayout