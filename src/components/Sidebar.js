import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { TbLayout2Filled } from "react-icons/tb";
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isShow = useSelector(store => store.sidebar)

  if (!isShow) return (
    <div className='p-2 w-20'>
      <div className="flex flex-col gap-5 justify-center">
        <button className='flex flex-col gap-3 items-center'>
          <div><IoMdHome /></div>
          <div className="text-[10px]">Home</div>
        </button>
        <button className='flex flex-col gap-3 items-center'>
          <div><SiYoutubeshorts /></div>
          <div className="text-[10px]">Shorts</div>
        </button>
        <button className='flex flex-col gap-3 items-center'>
          <div><MdOutlineSubscriptions /></div>
          <div className="text-[10px]">Subscriptions</div>
        </button>
        <button className='flex flex-col gap-3 items-center'>
          <div><TbLayout2Filled /></div>
          <div className="text-[10px]">You</div>
        </button>
      </div>
    </div>
  )

  return (
    <div className='flex flex-col gap-2 p-2 shadow-md z-2'>
      <div className='p-2 border-b-2'>
        <h5>Home</h5>
        <h5>Shorts</h5>
        <h5>Subscriptions</h5>
      </div>
      <div className='p-2 border-b-2'>
        <h5>Your Channel</h5>
        <h5>Library</h5>
        <h5>History</h5>
        <h5>Playlists</h5>
        <h5>Watch Later</h5>
        <h5>Liked Videos</h5>
      </div>
      <div className='p-2'>
        <h5>Trending</h5>
        <h5>Shopping</h5>
        <h5>Music</h5>
        <h5>Most viewed</h5>
        <h5>Show More</h5>
      </div>
    </div>
  )
}

export default Sidebar