import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "../features/sidebarslice";

const appstore = configureStore({
    reducer: {
        sidebar : sidebarslice
    }
})

export default appstore;