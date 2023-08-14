import { call, put } from 'redux-saga/effects';
import { getOfferDataApi } from '../../apis/offer';
import { offerFailureResponse, offerSuccessResponse } from '../slice/OfferSlice';

export function* fetchOfferSaga() {
    try {
        const response = yield call(getOfferDataApi);
        yield put(offerSuccessResponse(response));
    } catch (e) {
        yield put(offerFailureResponse());
    }
}