import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const sustemSlice = createSlice({
    name: 'sustem',
    initialState,
    reducers: {
        languageСhange : (state, {payload}) => {
            state.language = payload
        }
    },
})

export const sustemReducer = sustemSlice.reducer
export const {languageСhange} = sustemSlice.actions