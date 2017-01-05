/*
 *
 * SignIn actions
 *
 */

import {
  ACTIONS,
} from './constants';

export function signInRequest(email, password) {
  return {
    type: ACTIONS.SIGN_IN_ATTEMPT,
    email,
    password
  };
}

export function siginInSuccess(jwt) {
	return {
	  type: ACTIONS.SIGN_IN_SUCCESS,
	  jwt,
	};
}

export function siginInFailed(err) {
	return {
	  type: ACTIONS.SIGN_IN_FAILED,
    err,
	};
}

export function signUpRequest(email, password) {
  return {
    type: ACTIONS.SIGN_UP_ATTEMPT,
    email,
    password
  };
}

export function signUpSuccess(jwt) {
	return {
	  type: ACTIONS.SIGN_UP_SUCCESS,
	  jwt,
	};
}

export function signUpFailed(err) {
	return {
	  type: ACTIONS.SIGN_UP_FAILED,
    err,
	};
}