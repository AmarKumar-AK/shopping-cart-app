import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initializeCartOnLogin : (state, action) => {
            state.cart = action.payload
        },
        removeCartOnLogout : (state, action) => {
            state.cart = {}
        },
        addCartItemToCart : (state, action) => {
            state.cart.cartItems = action.payload
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
    },
})

export const selectIsCartOpen = (state) => state.cart.isCartOpen
export const { initializeCartOnLogin, removeCartOnLogout, addCartItemToCart, setIsCartOpen } = cartSlice.actions;
export default cartSlice.reducer;