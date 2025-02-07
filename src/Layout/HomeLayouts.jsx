

import React from 'react'
import { Outlet } from 'react-router'
import TrendingPost from '../homecomponents/TrendingPost'
import TopFollwer from '../homecomponents/TopFollwer'
import PopularHastag from '../Homecomponents/PopularHastag'
import NewAccount from '../Homecomponents/NewAccount'


function HomeLayouts() {
  return (
    <div>
        
       <TrendingPost/>
       
       <TopFollwer/>
       <PopularHastag/>
       <NewAccount/>

    </div>
  )
}

export default HomeLayouts