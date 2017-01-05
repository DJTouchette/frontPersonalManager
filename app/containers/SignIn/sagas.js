import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import Api from 'simple-json-api-wrapper';
import { API_ENDPOINTS } from 'services/api/index';
import { signInRequest, 
  siginInSuccess, 
  siginInFailed, 
  signUpRequest, 
  signUpSuccess, 
  signUpFailed } 
  from './actions';
import { ACTIONS } from './constants';
import { browserHistory } from 'react-router';

function* fetchAuth(action, url) {
  try {
      const { password, email } = action;
      const userSignin = yield call(Api.post, url, { password, email });

      if (userSignin.err) {
        return yield put(siginInFailed(userSignin.err));
      }

      if (userSignin.success) {
        const { jwt } = userSignin.content;
        console.log(jwt);
        yield localStorage.setItem('jwt', jwt);
        yield put(siginInSuccess(jwt));
        return yield browserHistory.push('/home');
      }

      yield put(siginInFailed('Something went wrong.'));
      
   } catch (e) {
      console.log(e);
      yield put(siginInFailed('Something went wrong.'));
   }
}

export function* fetchSignIn(action) {
  yield fetchAuth(action, API_ENDPOINTS.authenticate);
}

export function* fetchSignUp(action) {
  yield fetchAuth(action, API_ENDPOINTS.signup);
}

function* signUserIn() {
  yield takeLatest(ACTIONS.SIGN_IN_ATTEMPT, fetchSignIn);
}

function* signUpUser() {
  yield takeLatest(ACTIONS.SIGN_UP_ATTEMPT, fetchSignUp);
}

// All sagas to be loaded
export default [
  signUserIn,
  signUpUser,
];
