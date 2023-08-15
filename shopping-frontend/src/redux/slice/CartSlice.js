import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    userCart: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initializeCartOnLogin : (state, action) => {
            state.userCart = action.payload
        },
        removeCartOnLogout : (state, action) => {
            state.userCart = {}
        },
        addCartItemToCart : (state, action) => {
             
            state.userCart.cartItems.push({
                "name": action.payload.name,
                "imageURL": action.payload.imageURL,  
                "description": action.payload.description,
                "price": action.payload.price,
                "quantity": action.payload.quantity,
                "totalItemPrice": action.payload.totalItemPrice,
                "category": action.payload.category,
                "sku": action.payload.sku, 
                "id": action.payload.id
            })
            // state.userCart.cartItems = action.payload
        },
        changeCartItemQuantity : (state, action) => {
            const index = state.userCart.cartItems.findIndex(item => item.sku === action.payload.sku);
            state.userCart.cartItems[index].quantity = action.payload.newQuantity
            state.userCart.cartItems[index].totalItemPrice = action.payload.newQuantity * state.userCart.cartItems[index].price
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
    },
})

export const selectIsCartOpen = (state) => state.cart.isCartOpen
export const getCartItems = (state) => state.cart.userCart.cartItems
export const { initializeCartOnLogin, removeCartOnLogout, addCartItemToCart, changeCartItemQuantity, setIsCartOpen } = cartSlice.actions;
export default cartSlice.reducer;