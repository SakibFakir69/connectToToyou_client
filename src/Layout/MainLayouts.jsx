


import React from 'react'
import NavbarPage from '../components/NavbarPage'
import { Outlet } from 'react-router'

function MainLayouts() {
  return (
    <div>
        {/* nav bar implement here */}
        <header>
            <NavbarPage/>
        </header>
        {/* outlet */}
        <Outlet/>
        



    </div>
  )
}

export default MainLayouts