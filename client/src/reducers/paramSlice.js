import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
}

export const paramSlice = createSlice({
    name: "param",
    initialState,
    reducers: {
        param: (state, action) => {
            state[action.payload.name] = action.payload.value
        },
        resetParam: () => {
            return initialState
        }
    }
})

export const { param, resetParam } = paramSlice.actions

export default paramSlice.reducer