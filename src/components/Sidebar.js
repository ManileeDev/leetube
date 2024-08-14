import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';

import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../features/sidebarslice';

const Sidebar = () => {
  const isShow = useSelector(store => store.sidebar.isShow)
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        dispatch(toggle())
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [dispatch]);


  if (isShow) 

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={()=>dispatch(toggle())} ></div>
      <div className="relative bg-white w-60 h-full shadow-xl">
        <button
          className="absolute top-2 right-2 text-gray-600" onClick={()=>dispatch(toggle())}
        >
          X
        </button>
        <div className="p-4">
        <img className='h-[56px] ml-5' src='https://www.gstatic.com/youtube/img/promos/growth/072b1d5ba4f7e76f826aee686c62d1fe75232f3f595d1e6d068cbe9f4aa93806_244x112.webp' alt="yt logo" />
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
      </div>
    </div>,
    document.getElementById('portal-root')
  );

}

export default Sidebar