import React, { useEffect, useRef, useState } from 'react'
import LiveChatList from './LiveChatList'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdSend } from "react-icons/io";
import { addChat } from '../features/liveChatSlice';
import { randomComments, randomName } from '../utils/helpers';

const Livechat = () => {
    const dispatch = useDispatch();
    const [livechat, setLiveChat] = useState("")
    const chatMessages = useSelector(store => store.livechat.chats)
    let chatslength = chatMessages?.length;
    const livechatRef = useRef(null)
    useEffect(() => {
        const i = setInterval(() => {
            // API Polling

            dispatch(
                addChat({
                    name: randomName(),
                    chatText: randomComments(),
                })
            );
        }, 1500);

        return () => clearInterval(i);
    }, [dispatch]);
    useEffect(() => {
        if (livechatRef.current) {
            livechatRef.current.scrollTop = livechatRef.current.scrollHeight;
        }
    }, [chatMessages])

    return (
        <div className='w-full h-[500px] mx-4 border border-gray-200 rounded-xl overflow-hidden'>
            <h1 className='text-center text-sm font-semibold border-b border-gray-200 p-1 cursor-pointer hover:bg-gray-200 py-2'>Show Chat</h1>
            <div className='flex flex-col h-[410px] overflow-y-scroll w-80 overflow-x-hidden border-b border-gray-200' ref={livechatRef}>
                {chatMessages && chatMessages.map((c,i) => <LiveChatList key={i} name={c.name} chatText={c.chatText} />)}
            </div>
            <form className='flex justify-between items-center p-2'
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(
                        addChat({
                            id: chatslength + 1,
                            name: "Mani",
                            chatText: livechat,
                        })
                    );
                    setLiveChat("");
                }}
            >
                <img className='size-7 object-cover rounded-full' src="https://yt4.ggpht.com/8fBdNvre74cTHu_LyrTUiyspfsWCzW4v-tF77uP69h1E9P4alFaA3l_D8eY60DiViRojMzuapA=s64-c-k-c0x00ffffff-no-rj" alt="" />
                <input type='text' placeholder='Chat...' value={livechat} onChange={(e) => setLiveChat(e.target.value)} className='bg-gray-100 p-2 text-sm rounded-xl w-9/12 outline-none' />
                <button className='text-xl'><IoMdSend /></button>
            </form>
        </div>
    )
}

export default Livechat