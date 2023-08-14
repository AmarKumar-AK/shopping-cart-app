import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setCredentials: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    }
})

export const getUsername = (state) => state.auth.username;
export const getPassword = (state) => state.auth.password;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const { setUsername, setPassword, setCredentials, login, logout } = authSlice.actions;

export default authSlice.reducer;