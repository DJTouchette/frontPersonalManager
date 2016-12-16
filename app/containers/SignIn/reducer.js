/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ACTIONS,
} from './constants';

const initialState = fromJS({});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SIGN_IN_ATTEMPT:
      return state.set('fetchingData', true);
    
    case ACTIONS.SIGN_IN_RESPONSE:
      return state.set('fetchingData', false);

    default:
      return state;
  }
}

export default signInReducer;
