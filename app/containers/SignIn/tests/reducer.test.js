import expect from 'expect';
import signInReducer from '../reducer';
import { fromJS } from 'immutable';

describe('signInReducer', () => {
  it('returns the initial state', () => {
    expect(signInReducer(undefined, {})).toEqual(fromJS({}));
  });
});
