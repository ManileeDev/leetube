import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SidebarHome from './SidebarHome'
import Header from './Header'

const Body = () => {
  const home = useSelector(store=>store.sidebar.isHome)


  return (
    <><Header/>
    <div className='flex'>
       <Sidebar/>
       {home && <SidebarHome/>}
       <Outlet/>
    </div></>
    

  )
}

export default Body