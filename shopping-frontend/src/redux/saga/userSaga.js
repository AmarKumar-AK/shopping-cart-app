import { call, put } from 'redux-saga/effects';
import { getUsersDataApi } from '../../apis/user';
import { userFailureResponse, userSuccessResponse } from '../slice/UserSlice';

export function* fetchUsersSaga() {
    try {
        const response = yield call(getUsersDataApi);
        yield put(userSuccessResponse(response));
    } catch (e) {
        yield put(userFailureResponse())
    }
}