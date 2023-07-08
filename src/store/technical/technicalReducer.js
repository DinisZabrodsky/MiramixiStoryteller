import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const technicalSlice = createSlice({
    name: 'technical',
    initialState,
    reducers: {
        mobileResponsiveReduser: (state, {payload}) => {
            state.mobile = payload
            state.tablet = false
            state.desctop = false
        },

        tabletResponsiveReduser: (state, {payload}) => {
            state.tablet = payload
            state.mobile = false
            state.desctop = false
        },

        desctopResponsiveReduser: (state, {payload}) => {
            state.desctop = payload
            state.tablet = false
            state.mobile = false
        }
    }
})

export const technicalReducer = technicalSlice.reducer
export const {mobileResponsiveReduser, tabletResponsiveReduser, desctopResponsiveReduser } = technicalSlice.actions