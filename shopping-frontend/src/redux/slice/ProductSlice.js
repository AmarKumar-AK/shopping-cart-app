import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        requestProducts: (state) => {
            state.loading = true;
            console.log("requesting product data")
        },
        productSuccessResponse: (state, action) => {
            console.log("productSuccessResponse", action);

            state.data = action.payload;
            state.error = false;
            state.loading = false;
        },
        productFailureResponse: (state) => {
            console.log("productFailureResponse");
            state.error = true;
            state.loading = false;
        }
    }
})

export const getProducts = (state) => state.products.data;

export const { requestProducts, productSuccessResponse, productFailureResponse } = productSlice.actions;

export default productSlice.reducer;