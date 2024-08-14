import moment from 'moment/moment'
import React from 'react'

const VideoCard = ({info,isAd}) => {
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
  return (
    <div className='p-2 m-2 w-[280px]'>
       <img src={thumbnails?.medium?.url} alt="thumbnail" className='rounded-lg hover:rounded-none' />
       <h3 className='line-clamp-2 text-sm font-semibold my-2'>{title}</h3>
      {!isAd && <><h5 className='text-gray-600 text-sm'>{channelTitle}</h5> 
       <h5 className='text-gray-600 text-sm'>{formattedViews} Views <span>&#183;</span>  <span>{timeAgo}</span></h5></> }
       {isAd && <p className='pb-5 '><span className='font-bold'>Ad : </span><span className='text-red-500'>Sponsored</span></p>
}
    </div>
    
  )

}

export const AdVideoCard = ({info,isAd}) => {

    return(
                  <VideoCard info={info} isAd={isAd} />
    )
    
}

export default VideoCard