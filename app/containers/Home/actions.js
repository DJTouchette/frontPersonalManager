/*
 *
 * Home actions
 *
 */

import {
  ACTIONS
} from './constants';

export function getTodos() {
  return {
    type: ACTIONS.GET_TODOS_ATTEMPT,
  };
}

export function getTodosFailed() {
  return {
    type: ACTIONS.GET_TODOS_FAILED,
  };
}

export function getTodosSuccess(todos) {
  return {
    type: ACTIONS.GET_TODOS_SUCCESS,
    todos,
  };
}




