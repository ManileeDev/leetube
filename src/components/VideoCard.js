import moment from 'moment/moment'
import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info || {}
    const {channelTitle, title, thumbnails ,publishedAt} = snippet || {}
    const {viewCount} = statistics || {}
    const timeAgo = moment(publishedAt).fromNow();
    const formatViews = (views) => {
        if(views >= 1000000) {
            return (views / 1000000).toFixed(1) + "M";
        }
        else if(views >= 1000) {
            return (views / 1000).toFixed(1) + "K"
        }
        else{
            return views;
        }
    }

    const formattedViews = formatViews(viewCount)
    console.log(info)
  return (
    <div className='p-2 m-2 w-[280px] shadow-lg'>
       <img src={thumbnails?.medium.url} alt="thumbnail" className='rounded-lg hover:rounded-none' />
       <h3 className='line-clamp-2 text-sm font-semibold'>{title}</h3>
       <h5 className='text-gray-600 text-sm'>{channelTitle}</h5> 
       <h5 className='text-gray-600 text-sm'>{formattedViews} Views <span>&#183;</span>  <span>{timeAgo}</span></h5> 
    </div>
    
  )
}

export default VideoCard