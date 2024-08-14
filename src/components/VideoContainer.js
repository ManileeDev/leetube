import React, { useEffect, useState } from 'react'
import { YT_URL } from '../utils/constants'
import VideoCard, { AdVideoCard } from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const response = await fetch(YT_URL)
    const result = await response.json()
    setVideos(result.items)
  }
  return (
    <div className="flex flex-wrap">
      {videos[0] && <Link to={`/watch?v=${videos[0].id}`}><AdVideoCard info={videos[0]} isAd={true}/></Link>}
      {videos.slice(1).map((video) => (<Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard info={video} /></Link>))}
    </div>
  )
}

export default VideoContainer