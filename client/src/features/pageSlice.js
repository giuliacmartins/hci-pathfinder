import {createSlice} from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState:{
        page:null
    },
    reducers:{
        choosePage: (state,action) => {
            state.page = action.payload;
        },
        noPage: (state) => {
            state.page = null;
        },
    },
});

export const {choosePage,noPage} = pageSlice.actions;

export const selectPage = (state) => state.page.page;

export default pageSlice.reducer;