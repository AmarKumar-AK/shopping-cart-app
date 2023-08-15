import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    cart: {},
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.cart = action.payload.cart;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.cart = {};
        },
    }
})

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;