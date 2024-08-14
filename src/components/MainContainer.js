import React, { useEffect } from 'react'
import Category from './Category'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { toggleHome } from '../features/sidebarslice'

const MainContainer = () => {
  const dispatch =useDispatch();
  useEffect(()=>{
     dispatch(toggleHome())
  },[dispatch])
  return (
    <div className='mt-[100px] ml-16'>
        <Category/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer