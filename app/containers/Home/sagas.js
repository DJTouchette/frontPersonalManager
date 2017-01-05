import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import Api from 'services/api/api';
import { API_ENDPOINTS } from 'services/api/index';
import { 
  getTodos, 
  getTodosFailed, 
  getTodosSuccess } 
  from './actions';
import { ACTIONS } from './constants';

// Individual exports for testing
function* getUsersTodos(action) {
  try {
      const todoCall = yield call(Api.get, API_ENDPOINTS.userTodoEvent, localStorage.getItem('jwt'));

      if (todoCall.err) return yield put(getTodosFailed(userSignin.err));

      if (todoCall.success) {
        return yield put(getTodosSuccess(todoCall.content));
      }

      yield put(getTodosFailed('Something went wrong.'));
      
   } 
   catch (e) {
      console.log(e);
      yield put(getTodosFailed('Something went wrong.'));
   }
}

function* signUserIn() {
  yield takeLatest(ACTIONS.GET_TODOS_ATTEMPT, getUsersTodos);
}

// All sagas to be loaded
export default [
  signUserIn,
];
