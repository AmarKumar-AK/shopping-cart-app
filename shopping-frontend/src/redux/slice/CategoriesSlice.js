import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        requestCategories: (state) => {
            state.loading = true;
            console.log("requesting categories data")
        },
        categoriesSuccessResponse: (state, action) => {
            console.log("categoriesSuccessResponse", action);

            state.data = action.payload;
            state.error = false
            state.loading = false
        },
        categoriesFailureResponse: (state) => {
            console.log("categoriesFailureResponse");
            state.error = true
            state.loading = false
        },
    }
})

export const getCategories = (state) => state.categories.data;

export const { requestCategories, categoriesSuccessResponse, categoriesFailureResponse } = categoriesSlice.actions;
export default categoriesSlice.reducer;