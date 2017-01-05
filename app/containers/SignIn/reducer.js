/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ACTIONS,
} from './constants';

const initialState = fromJS({
  errMsg: null,
  success: false,
  fetchingData: false,
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SIGN_IN_ATTEMPT:
      return state.set('fetchingData', true);
    
    case ACTIONS.SIGN_IN_SUCCESS:
      return state.set('fetchingData', false)
            .set('success', true)
            .set('jwt', action.jwt)
            .set('errMsg', null);

    case ACTIONS.SIGN_IN_FAILED:
      return state.set('fetchingData', false)
            .set('success', false)
            .set('errMsg', action.err)

    case ACTIONS.SIGN_UP_ATTEMPT:
      return state.set('fetchingData', true);
    
    case ACTIONS.SIGN_UP_SUCCESS:
      return state.set('fetchingData', false)
            .set('success', true)
            .set('jwt', action.jwt)
            .set('errMsg', null);

    case ACTIONS.SIGN_UP_FAILED:
      return state.set('fetchingData', false)
            .set('success', false)
            .set('errMsg', action.err)

    default:
      return state;
  }
}

export default signInReducer;
