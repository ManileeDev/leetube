import React, { useEffect, useState } from 'react'
import { YT_URL, searchAPI } from '../utils/constants'
import VideoCard, { AdVideoCard } from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { setVideoDatas } from '../features/videosSlice'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const searchValue = useSelector((store) => store.search.value || "")
  const dispatch = useDispatch();
  useEffect(() => {
      if(searchValue.length > 0){
        getData(searchAPI+searchValue);
      }
      else{
        getData(YT_URL);
      }   
  }, [searchValue])

  const getData = async (url) => {  
    const response = await fetch(url)
    const result = await response.json()
    const normalizedVideos = result.items.map((video)=>({
      ...video,
      id: video.id.videoId || video.id
    }))
    setVideos(normalizedVideos)
  }

  return (
    <div className="flex flex-wrap">
      {videos && videos[0] && <Link to={`/watch?v=${videos[0].id}`} onClick={()=>dispatch(setVideoDatas(videos[0]))}><AdVideoCard info={videos[0]} isAd={true}/></Link>}
      {videos && videos.slice(1).map((video) => (<Link key={video.id} to={`/watch?v=${video.id}`} onClick={()=>dispatch(setVideoDatas(video))}><VideoCard info={video} /></Link>))}
    </div>
  )
}

export default VideoContainer