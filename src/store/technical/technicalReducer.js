import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const technicalSlice = createSlice({
    name: 'technical',
    initialState,
    reducers: {
        addResponsive: (state, {payload}) => {
            state.mobileResponsive = payload
        }
    }
})

export const technicalReducer = technicalSlice.reducer
export const {addResponsive} = technicalSlice.actions