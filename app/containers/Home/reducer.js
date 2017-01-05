/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ACTIONS
} from './constants';

const initialState = fromJS({
  isFetching: false,
  success: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_TODOS_ATTEMPT:
      return state.set('isFetching', true);

    case ACTIONS.GET_TODOS_FAILED:
      return state.set('isFetching', false)
            .set('success', false);

    case ACTIONS.GET_TODOS_SUCCESS:
      return state.set('todos', action.todos)
            .set('success', true)
            .set('isFetching', false);

    default:
      return state;
  }
}

export default homeReducer;
