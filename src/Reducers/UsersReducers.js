import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userData = createAsyncThunk('userData', async () => {
    try {
        const res = await axios.get("http://localhost:5000/user")
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const addUser = createAsyncThunk('addUser', async (newUser) => {
    try {
        const res = await axios.post("http://localhost:5000/user", newUser)
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

const UsersReducers = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: null,
        userfound: null,
        isError: false
    },
    reducers: {
        isUserFound: (state, action) => {
            state.userfound = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(userData.rejected, (state, action) => {
                state.isError = true;
                console.log("Error", action.payload)
            })
            .addCase(addUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.isError = true;
                console.log("Error", action.payload);
            })
    },
})

export const { isUserFound } = UsersReducers.actions
export default UsersReducers.reducer