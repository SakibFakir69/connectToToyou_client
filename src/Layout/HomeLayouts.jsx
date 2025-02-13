

import React from 'react'
import { Outlet } from 'react-router'
import TrendingPost from '../homecomponents/TrendingPost'
import TopFollwer from '../homecomponents/TopFollwer'
import PopularHastag from '../Homecomponents/PopularHastag'
import NewAccount from '../Homecomponents/NewAccount'
import AboutNow from '../Homecomponents/AboutNow'


function HomeLayouts() {
  return (
    <div className='mt-16 bg-color'>
        
       <TrendingPost/>
       
       <TopFollwer/>
       <PopularHastag/>
       <NewAccount/>
       <AboutNow/>

       {/* add about section why you here short message but you know all info */}

    </div>
  )
}

export default HomeLayouts