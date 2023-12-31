import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import categoriesReducer from "./slice/CategoriesSlice"
import productReducer from "./slice/ProductSlice"
import offerReducer from "./slice/OfferSlice"
import cartReducer from "./slice/CartSlice"
import userReducer from "./slice/UserSlice"
import authReducer from "./slice/AuthSlice"
import createSagaMiddleware from 'redux-saga';
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware(); 

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    products: productReducer,
    offer: offerReducer,
    cart: cartReducer,
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const myPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: myPersistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export const persistor = persistStore(store);

export default store;
sagaMiddleware.run(saga)