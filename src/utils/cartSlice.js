import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        // addItem, removeItem, clearCart are the actions or dispatching actions
        // arrow functions for the actions are called reducer functions
        // Here we are mapping reducer function to actions to modify the slice of the cart
        /* addItems: (state, action) => {
            state.items.push(action.payload)
        } */
       
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem : (state, action) => {
            // here we are removing the last item from the cart
            // If we want to remove a specific item we can use filter method and action comes in.
            state.items.pop()
        },
        clearCart: (state) => {
            // redux toolkit allows to directly mutate the state or we can return the new state
            
            //state.items = [] // Mutating the state
            return {items: []} // Returning the new state
        }
    }
})
// we are exporting the reducer and the actions
export const {addItems, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer



// createSlice is a function that returns an object with the following properties:
// name: the slice name
// initialState: the initial state value for the slice
// reducers: an object with the reducer functions as properties

// cartslice Object looks like 
/*
{
    actions: {
        addItems: Function,
        removeItem: Function,
        clearCart: Function
    },
    reducer: Function
}
*/