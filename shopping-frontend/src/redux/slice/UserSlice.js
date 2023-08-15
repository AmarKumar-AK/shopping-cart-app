import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        requestUsers(state) {
            state.loading = true;
            console.log("requesting user data")
        },
        userSuccessResponse(state, action) {
            console.log("userSuccessResponse", action);

            state.data = action.payload;
            state.loading = false;
            state.error = false;
        },
        userFailureResponse(state) {
            console.log("userFailureResponse");

            state.error = true;
            state.loading = false;
        }
    }
});

export const getUsers = (state) => state.user.data;

export const { requestUsers, userSuccessResponse, userFailureResponse } = userSlice.actions;
export default userSlice.reducer;
