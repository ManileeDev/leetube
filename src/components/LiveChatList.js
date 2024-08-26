import React from 'react'

const LiveChatList = ({name,chatText}) => {
    return (
            <div className='flex items-center p-2 gap-2 hover:bg-gray-100'>
                <img className='size-6 rounded-full' src="https://yt4.ggpht.com/-7m2ZT8p1N3rwyQk75b1n2a3wVERuak4caAq3dMGyx2mI5Pn3I8M9zYDeum4BsWaeeb4rWtJceE=s32-c-k-c0x00ffffff-no-rj" alt="logo" />
                <p className='text-sm font-semibold line-clamp-1 text-gray-600'>{name}</p>
                <p className='text-xs breakwords'>{chatText}</p>
            </div>

    )
}

export default LiveChatList