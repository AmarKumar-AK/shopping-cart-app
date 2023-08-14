import { call, put } from 'redux-saga/effects';
import { getProductsDataApi } from '../../apis/products';
import { productFailureResponse, productSuccessResponse } from '../slice/ProductSlice';

export function* fetchProductsSaga() {
    try {
        const response = yield call(getProductsDataApi);
        yield put(productSuccessResponse(response));
    } catch (e) {
        yield put(productFailureResponse())
    }
}

// export function* fetchProductsByCategorySaga(action) {
//     try {
//         const response = yield call(getProductsDataByCategoryApi, action.payload);
//         yield put(productSuccessResponse(response));
//     } catch (e) {
//         yield put(productFailureResponse())
//     }
// }