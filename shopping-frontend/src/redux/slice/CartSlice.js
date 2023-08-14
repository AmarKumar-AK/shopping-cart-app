import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
    },
})

export const selectIsCartOpen = (state) => state.cart.isCartOpen
export const { setIsCartOpen } = cartSlice.actions;
export default cartSlice.reducer;