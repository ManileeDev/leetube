import React from 'react'
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { IoMdMic } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { toggle } from '../features/sidebarslice';

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='grid grid-flow-col'>
            <div className='flex items-center col-span-1'>
                <img className="h-12 ml-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADX19ewsLDFxcW2trbBwcELCwuWlpbz8/PZ2dnc3NxZWVlsbGzj4+Opqak0NDSfn5+FhYVhYWF9fX0mJiZRUVH39/dycnKOjo4WFhbs7OwdHR3Nzc1GRkZeN5/TAAABVElEQVR4nO3cCW7CMBAF0BB2SllLV0rvf8sGpB7BM+rkvQtEX5Zjx5Nx1wEAAAAAAAAAAAAAAAAAAEC0zdO0re17ar7pc9/carfPC7hun+9hkRXw0PeTCH0/zwl4XcUEHCIecybjKSrgMIjLlIS7sIST/pyS8C0w4UdKwpfAhJeUhJ+BCWcpCbdBi8UQ8OuakrA7h62Hh5yA95kYkHF4Rs6b9OEQsWf7zlkM/9wWs7YW09R8AAAAAP/Fft7YLbE+OlgeA87afhLPoi4B+e5OWQHXYWfeSWXufVzd4nWTknAdWHvKGcTI+qEacBv1x7D+PKz/Lq2/Ho5gTxO1L73lBRxsW39bzHO/LQAAAAD+i+r/6pfvtyjfMxPX95R0JFy/d61+/2H9HtL6NeD6vdz1+/Hr36lQ/16MEdxtMoL7abr6dwwBAAAAAAAAAAAAAAAAAAAwTr/LxSR1bBQKdAAAAABJRU5ErkJggg==" alt="hamburger" onClick={()=>dispatch(toggle())}/>
                <img className='h-[56px]' src='https://www.gstatic.com/youtube/img/promos/growth/072b1d5ba4f7e76f826aee686c62d1fe75232f3f595d1e6d068cbe9f4aa93806_244x112.webp' alt="yt logo" />
            </div>
            <div className="col-span-10 px-10 mt-2 ml-8">
                <div className='text-left flex'>
                    <input
                        className="px-5 w-2/3 border border-gray-400 p-2 rounded-l-full"
                        type="text" placeholder='Search'
                    />
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                        🔍
                    </button>
                        <IoMdMic className='size-8 text-3xl mt-[6px] ml-4 bg-gray-100 rounded-full p-2'/>
                </div>
            </div>

            <div className='col-span-1 flex items-center gap-6 justify-center'>
                <div><RiVideoAddLine className='size-8' /></div>
                <div><MdOutlineNotificationsNone className='size-8' /></div>
                <div><RxAvatar className='size-8' /></div>
            </div>
        </div>
    )
}

export default Header