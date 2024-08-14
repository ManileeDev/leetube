import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { TbLayout2Filled } from "react-icons/tb";
import { Link } from 'react-router-dom';


const SidebarHome = () => {

    return (
        <div className='p-2 w-14 m-2 fixed top-14 bg-white'>
            <div className="flex flex-col gap-5 justify-center">
                <button className='flex flex-col gap-3 items-center'>
                    <div><IoMdHome /></div>
                    <div className="text-[10px]"><Link to="/">Home</Link></div>
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


}

export default SidebarHome