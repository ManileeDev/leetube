import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState : {
    cache: {},
    value: ""
    },
    reducers : {
        addtoCache : (state,action) => {
            state.cache = {...state.cache,...action.payload}
        },
        setValue: (state,action) => {
            state.value = action.payload
        }
    }
})


export const {addtoCache,setValue} = searchSlice.actions
export default searchSlice.reducer;