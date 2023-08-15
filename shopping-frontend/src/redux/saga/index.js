import { takeEvery } from "redux-saga/effects";

import { requestCategories } from "../slice/CategoriesSlice";
import { requestProducts } from "../slice/ProductSlice";
import { requestOffer } from "../slice/OfferSlice";
import { requestUsers } from "../slice/UserSlice";

import { fetchCategoriesSaga } from "./categoriesSaga";
import { fetchProductsSaga } from "./productsSaga";
import { fetchOfferSaga } from "./offerSaga";
import { fetchUsersSaga } from "./userSaga";


function* saga() {
  yield takeEvery(requestCategories, fetchCategoriesSaga)
  yield takeEvery(requestProducts, fetchProductsSaga)
  yield takeEvery(requestOffer, fetchOfferSaga)
  yield takeEvery(requestUsers, fetchUsersSaga)

}

export default saga;