import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false,
    loading: false,
}

const offerSlice = createSlice({
    name: "offer",
    initialState, 
    reducers: {
        requestOffer: (state) => {
            state.loading = true;
            console.log("requesting offer data")
        },
        offerSuccessResponse: (state, action) => {
            console.log("offerSuccessResponse", action);

            state.data = action.payload;
            state.error = false;
            state.loading = false;
        },
        offerFailureResponse: (state) => {
            console.log("offerFailureResponse");
            state.error = true;
            state.loading = false;
        },
    }

});

export const getOffers = (state) => state.offer.data;

export const { requestOffer, offerSuccessResponse, offerFailureResponse } = offerSlice.actions;
export default offerSlice.reducer;