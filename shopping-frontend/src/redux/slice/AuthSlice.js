import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.username = action.payload;
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    }
})

export const getEmail = (state) => state.auth.email;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const { setEmail, login, logout } = authSlice.actions;

export default authSlice.reducer;