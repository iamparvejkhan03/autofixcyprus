import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language:'en',
}

const languageSlice = createSlice({
    name:'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export const { changeLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;