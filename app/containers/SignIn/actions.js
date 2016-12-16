/*
 *
 * SignIn actions
 *
 */

import {
  DEFAULT_ACTION,
  ACTIONS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signInRequest(email, password) {
  return {
    type: ACTIONS.SIGN_IN_ATTEMPT,
    email,
    password
  };
}

export function siginInResponse(success, jwt) {
	return {
	  type: ACTIONS.SIGN_IN_RESPONSE,
	  success,
	  jwt,
	};
}