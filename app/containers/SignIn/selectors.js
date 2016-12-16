import { createSelector } from 'reselect';

/**
 * Direct selector to the signIn state domain
 */
const selectSignInDomain = () => (state) => state.get('signIn');
const selectFormDomain = () => (state) => state.get('form');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignIn
 */

 const selectForm = () => createSelector(
  selectFormDomain(),
  (substate) => substate
); 

const selectSignIn = () => createSelector(
  [selectSignInDomain, selectFormDomain],
  (signIn, form) => {form, signIn}
);

export default selectForm;
export {
  selectSignInDomain,
  selectForm,
};
