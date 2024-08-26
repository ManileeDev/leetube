import { createSlice } from "@reduxjs/toolkit";
import { liveChatData } from "../utils/DummyLiveComments";

const liveChatSlice = createSlice({
    name : "live",
    initialState: {
        chats: liveChatData
    },
    reducers: {
        addChat : (state,action) => {
            state.chats.splice(liveChatData, 1);
            state.chats.push(action.payload);
        }
    }
})

export const {addChat} = liveChatSlice.actions
export default liveChatSlice.reducer;