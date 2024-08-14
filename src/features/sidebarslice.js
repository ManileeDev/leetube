import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isShow : false,
        isHome : true,
    },
    reducers: {
        toggle: (state) => {
            state.isShow = !state.isShow
        },
        close: (state) => {
            state.isShow = false
        },
        toggleHome: (state) => {
            state.isHome = !state.isHome
        }
    }
})
export const {toggle,close,toggleHome} = sidebarSlice.actions;
export default sidebarSlice.reducer;