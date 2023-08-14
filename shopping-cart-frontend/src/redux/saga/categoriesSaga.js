import { call, put } from 'redux-saga/effects';
import { getCategoriesDataApi } from '../../apis/categories';
import { categoriesSuccessResponse, categoriesFailureResponse } from '../slice/CategoriesSlice';

export function* fetchCategoriesSaga() {
    try {
        const response = yield call(getCategoriesDataApi);
        yield put(categoriesSuccessResponse(response));
    } catch (e) {
        yield put(categoriesFailureResponse());
    }
}