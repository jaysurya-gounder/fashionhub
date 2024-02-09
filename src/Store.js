import { configureStore } from "@reduxjs/toolkit";
import UsersReducers from "./Reducers/UsersReducers";
import ControlReducer from "./Reducers/ControlReducer";
import ProductsReducer from "./Reducers/ProductsReducer";
import CartReducer from "./Reducers/CartReducer";
import QuickReducer from "./Reducers/QuickReducer";

export const store = configureStore({
    reducer: {
        users: UsersReducers,
        controls: ControlReducer,
        products: ProductsReducer,
        cart: CartReducer,
        quickView: QuickReducer
    },
    devTools: true
})