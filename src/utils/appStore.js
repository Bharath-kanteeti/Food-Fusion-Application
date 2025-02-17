import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // reducer is a root reducer or appreducer which contains reducrs of all slices
    // cartReducer is a reducer of cartSlice
    // cart: cartReducer is a key value pair where key is the slice name and value is the reducer of that slice
    // We can add more slices in the store by adding more key value pairs
    /* need to add slices in store */
    reducer:{
        cart: cartReducer
    }
})

export default appStore;