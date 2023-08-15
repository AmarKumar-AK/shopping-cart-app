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
        },
        addUser(state, action) {
            state.data.push({
                "firstName": action.payload.firstName,
                "lastName": action.payload.lastName,
                "email": action.payload.email,
                "password": action.payload.password,
                "cart": action.payload.cart
            });
        }
    }
});

export const getUsers = (state) => state.user.data;

export const { requestUsers, userSuccessResponse, userFailureResponse, addUser } = userSlice.actions;
export default userSlice.reducer;
