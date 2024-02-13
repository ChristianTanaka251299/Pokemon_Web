import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/userSlice"
import paramReducer from "./reducers/paramSlice"


const store = configureStore({
    reducer: {
        user: userReducer,
        param: paramReducer
    }
})

export default store