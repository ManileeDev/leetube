import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name : "videos",
    initialState: null,
    reducers: {
        setVideoDatas : (state,action) => {
             return action.payload
        }
    }
})

export const {setVideoDatas} = videosSlice.actions
export default videosSlice.reducer;