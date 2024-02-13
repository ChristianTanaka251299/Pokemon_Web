import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
}

export const paramSlice = createSlice({
    name: "param",
    initialState,
    reducers: {
        param: (state, action) => {
            state[action.payload.name] = action.payload.value
        }
    }
})

export const { param } = paramSlice.actions

export default paramSlice.reducer