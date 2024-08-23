import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close, toggleHome } from '../features/sidebarslice';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment/moment'
import { YT_API_KEY } from '../utils/constants';
import { setVideoDatas } from '../features/videosSlice';
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import CommentsContainer from './CommentsContainer';

const WatchVideo = () => {
  const videoDatas = useSelector(store => store.videos)
  const [showmore,setShowmore] = useState(false)
  const [video, setVideo] = useState(videoDatas);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  const watchUrl = searchParams.get("v")
  useEffect(() => {
    dispatch(close())
    dispatch(toggleHome())
    if (!video || video.id !== watchUrl) {
      const fetchVideoData = async () => {
        try {
          const url = `https://www.googleapis.com/youtube/v3/videos?id=${watchUrl}&part=snippet,contentDetails,statistics&key=${YT_API_KEY}`;
          const response = await fetch(url);
          const result = await response.json();
          if (result.items && result.items.length > 0) {
            setVideo(result.items[0]);
            dispatch(setVideoDatas(result.items[0]));
          } else {
            console.error('No video data found.');
          }
        } catch (error) {
          console.error('Error fetching video data:', error);
        }
      };

      fetchVideoData();
    }
    return () => {
      dispatch(toggleHome())
    }
  }, [dispatch])


  const { snippet, statistics } = video || {}
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet || {}
  const { viewCount } = statistics || {}
  const timeAgo = moment(publishedAt).fromNow();
  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    }
    else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K"
    }
    else {
      return views;
    }
  }

  const formattedViews = formatViews(viewCount)

  if (!video) {
    return <div>Loading ...</div>
  }
  return (
    <div>
      <div className='mx-5 mt-20 px-2 pt-2 pb-1 w-[900px]'>
        <iframe
          width="876"
          height="369"
          src={`https://www.youtube.com/embed/${watchUrl}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='rounded-xl'
        ></iframe>
        <div className='p-2'>
          <h1 className='line-clamp-2 font-bold text-xl w-12/12'>{title}</h1>
        </div>
        <div className='p-2 flex justify-between'>
          <div className=' flex gap-3 items-center'>
            <img src={thumbnails?.medium?.url} className='size-10 rounded-full object-cover' alt="channel logo" />
            <div>
              <h3 className='font-semibold'>{channelTitle}</h3>
              <p className='text-xs pt-[2px] text-gray-600'>20.3 Subscribers</p>
            </div>
            <button className='bg-black text-white text-sm w-24 h-9 font-semibold rounded-3xl'>Subscribe</button>
          </div>
          <div className='flex items-center gap-6 px-4'>
            <div className='flex items-center p-2 gap-2 bg-gray-100 rounded-lg'>
              <div className='flex items-center border-r-2 border-gray-400 pr-2'><span className='px-2'><GoThumbsup /></span>{formattedViews}</div>
              <GoThumbsdown />
            </div>
            <div>
              <div className='flex items-center p-2 bg-gray-100 rounded-lg'>
                <span className='px-2'><PiShareFat /></span> Share
              </div>
            </div>
            <div className='flex items-center p-3 bg-gray-100 rounded-full'>
              <BsThreeDots />
            </div>
          </div>
        </div>
        <div className='p-2 bg-gray-100 rounded-lg w-[876px]'>
          <p className='font-semibold'><span>{viewCount ? formattedViews : "100K"} Views</span> <span>{timeAgo ? timeAgo : "1 year ago"} </span></p>
          <p className={!showmore ? "line-clamp-2" : ""} onClick={(e)=>setShowmore(pre=>!pre)}>{description}</p>
        </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchVideo