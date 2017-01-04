/*
 *
 * SignIn
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import {selectSignIn} from './selectors';
import SignInForm from 'components/SignInForm';
import { FlexCentered } from './styled';
import { signInRequest } from './actions';

export class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { values } = this.props.form.signIn;
    if (!values) {
      return;
    }
    this.props.signInRequest(values.email, values.password);
  }

  render() {
    console.log(this.props);
    const { errMsg } = this.props.signIn;
    return (
      <FlexCentered>
      	<SignInForm 
          handleSubmit={this.handleSubmit.bind(this)}
          err={errMsg}
        />
      </FlexCentered>
    );
  }
}

const mapStateToProps = selectSignIn();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    signInRequest: (email, password) => dispatch(signInRequest(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
