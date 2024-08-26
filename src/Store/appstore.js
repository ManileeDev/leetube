import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "../features/sidebarslice";
import searchSlice from "../features/searchSlice";
import videosSlice from "../features/videosSlice";
import liveChatSlice from "../features/liveChatSlice";

const appstore = configureStore({
    reducer: {
        sidebar : sidebarslice,
        search : searchSlice,
        videos : videosSlice,
        livechat : liveChatSlice
    }
})

export default appstore;