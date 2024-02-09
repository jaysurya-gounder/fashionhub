import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        wishlist: [],
    },
    reducers: {
        addCart: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
        addCartQuantity: (state, action) => {
            const { type, id } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (type === "add") {
                existingItem.quantity += 1;
            } else {
                if (existingItem.quantity <= 1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        },
        toggleWishlist: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.wishlist.find(item => item.id === id);
            if (existingItem) {
                state.wishlist = state.wishlist.filter(item => item.id !== id);
            } else {
                state.wishlist.push(action.payload);
            }
        },
        removeCart: (state, action) => {
            const id = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
        },
    }
})

export const { addCart, toggleWishlist, removeCart,  addCartQuantity } = CartReducer.actions;
export default CartReducer.reducer