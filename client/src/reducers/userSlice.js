import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    first_name: "",
    last_name: "",
    profile_picture:"",
    refresh_token:""
}

export const userSlice = createSlice({
    name: "user ya",
    initialState,
    reducers: {
        login: (state, action) => {
            state.first_name = action.payload.firstName
            state.last_name = action.payload.lastName
            state.profile_picture = action.payload.profilePicture
            state.refresh_token = action.payload.refreshToken
        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer