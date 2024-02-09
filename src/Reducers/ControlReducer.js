import { createSlice } from "@reduxjs/toolkit";

const ControlReducer = createSlice({
    name: 'controls',
    initialState: {
        signIn: false,
        scrolled: false,
    },
    reducers: {
        isSignIn: (state, action) => {
            state.signIn = action.payload
        },
        setScrolled: (state, action) => {
            state.scrolled = action.payload
        }
    }
})

export const { isSignIn, setScrolled } = ControlReducer.actions
export default ControlReducer.reducer