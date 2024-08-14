import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { close, toggleHome } from '../features/sidebarslice';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {

  const [searchParams] = useSearchParams()
  const watchUrl = searchParams.get("v")
  console.log(watchUrl)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(close())
    dispatch(toggleHome())
    return () => {
      dispatch(toggleHome())
    }
  }, [dispatch])
  return (
    <div className='m-16 p-5'>
      <iframe
        width="656"
        height="369"
        src={`https://www.youtube.com/embed/${watchUrl}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen 
        className='px-2 rounded-3xl'
      ></iframe>
    </div>
  )
}

export default WatchVideo