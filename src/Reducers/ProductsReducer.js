import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const mens = createAsyncThunk('mens', async () => {
    try {
        const res = await axios.get("http://localhost:5000/mens")
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const trending = createAsyncThunk('trending', async () => {
    try {
        const res = await axios.get("http://localhost:5000/trending")
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const womens = createAsyncThunk('womens', async () => {
    try {
        const res = await axios.get("http://localhost:5000/womens")
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const watches = createAsyncThunk('watches', async () => {
    try {
        const res = await axios.get("http://localhost:5000/watches")
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const footwears = createAsyncThunk('footwears', async () => {
    try {
        const res = await axios.get("http://localhost:5000/footwears")
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

const ProductsReducers = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        isError: false,
        mens: [],
        trending: [],
        watches: [],
        womens: [],
        footwears: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(mens.pending, (state) => {
                state.isLoading = true
            })
            .addCase(mens.fulfilled, (state, action) => {
                state.isLoading = false
                state.mens = action.payload
            })
            .addCase(mens.rejected, (state, action) => {
                state.isError = true
                console.log("Error", action.payload)
            })
            .addCase(trending.pending, (state) => {
                state.isLoading = true
            })
            .addCase(trending.fulfilled, (state, action) => {
                state.isLoading = false
                state.trending = action.payload
            })
            .addCase(trending.rejected, (state, action) => {
                state.isError = true
                console.log("Error", action.payload)
            })
            .addCase(womens.pending, (state) => {
                state.isLoading = true
            })
            .addCase(womens.fulfilled, (state, action) => {
                state.isLoading = false
                state.womens = action.payload
            })
            .addCase(womens.rejected, (state, action) => {
                state.isError = true
                console.log("Error", action.payload)
            })
            .addCase(watches.pending, (state) => {
                state.isLoading = true
            })
            .addCase(watches.fulfilled, (state, action) => {
                state.isLoading = false
                state.watches = action.payload
            })
            .addCase(watches.rejected, (state, action) => {
                state.isError = true
                console.log("Error", action.payload)
            })
            .addCase(footwears.pending, (state) => {
                state.isLoading = true
            })
            .addCase(footwears.fulfilled, (state, action) => {
                state.isLoading = false
                state.footwears = action.payload
            })
            .addCase(footwears.rejected, (state, action) => {
                state.isError = true
                console.log("Error", action.payload)
            })

    }
})

export default ProductsReducers.reducer