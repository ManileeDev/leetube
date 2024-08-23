import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "../features/sidebarslice";
import searchSlice from "../features/searchSlice";
import videosSlice from "../features/videosSlice";

const appstore = configureStore({
    reducer: {
        sidebar : sidebarslice,
        search : searchSlice,
        videos : videosSlice
    }
})

export default appstore;