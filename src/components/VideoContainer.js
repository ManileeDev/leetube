import React, { useEffect, useState } from 'react'
import { YT_URL } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    getData();
  },[])
  const getData = async ()=>{
       const response = await fetch(YT_URL)
       const result = await response.json()
       setVideos(result.items)
  }
  return (
    <div className="flex flex-wrap">
        {videos.map((video)=> (<VideoCard key={video.id} info={video}/>))}
    </div>
  )
}

export default VideoContainer