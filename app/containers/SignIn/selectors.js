import { createSelector } from 'reselect';

/**
 * Direct selector to the signIn state domain
 */
const selectSignInDomain = () => (state) => state.get('signIn').toJS();
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

export const selectSignIn = () => createSelector(
  selectSignInDomain(), 
  selectFormDomain(),
  (signIn, form) => ({signIn, form})
);

export default selectForm;
export {
  selectSignInDomain,
  selectForm,
};
