

import React from 'react'
import { Outlet } from 'react-router'
import TrendingPost from '../homecomponents/TrendingPost'
import TopFollwer from '../homecomponents/TopFollwer'
import PopularHastag from '../Homecomponents/PopularHastag'
import NewAccount from '../Homecomponents/NewAccount'
import AboutNow from '../Homecomponents/AboutNow'
import NewsLetter from '../components/NewsLetter'
import Footer from '../Homecomponents/Footer'


function HomeLayouts() {
  return (
    <div className='mt-16 bg-color'>

      {/* add animtion home layouts */}
        
       <TrendingPost/>
       
       <TopFollwer/>
       <AboutNow/>
     
       <NewAccount/>

       <NewsLetter/>
       <Footer/>
      

       {/* add about section why you here short message but you know all info */}

    </div>
  )
}

export default HomeLayouts