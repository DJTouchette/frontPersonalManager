import { call, put } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import Api from 'simple-json-api-wrapper';
import { API_ENDPOINTS } from 'services/api/index';
import { signInRequest, siginInSuccess, siginInFailed } from './actions';
import { ACTIONS } from './constants';

// Individual exports for testing
export function* defaultSaga() {
  return;
}

export function* fetchSignIn(action) {
  try {
    console.log(action);
      const { password, email } = action;
      const userSignin = yield call(Api.post, API_ENDPOINTS.authenticate, { password, email });
      console.log(userSignin);
      if (userSignin.err) {
        return yield put(siginInFailed(userSignin.err));
      }

      if (userSignin.success) {
        return yield put(siginInSuccess(userSignin.content.jwt));
      }

      yield put(siginInFailed('Something went wrong.'));
      
   } catch (e) {
      console.log(e);
      yield put(siginInFailed('Something went wrong.'));
   }
}

function* signUserIn() {
  yield takeEvery(ACTIONS.SIGN_IN_ATTEMPT, fetchSignIn);
}

// All sagas to be loaded
export default [
  signUserIn,
];
