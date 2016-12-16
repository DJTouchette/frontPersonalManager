/*
 *
 * SignIn
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSignIn from './selectors';
import SignInForm from 'components/SignInForm';
import { FlexCentered } from './styled';

export class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { values } = this.props.signIn;
    console.debug(values);
  }

  render() {
    return (
      <FlexCentered>
      	<SignInForm 
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </FlexCentered>
    );
  }
}

const mapStateToProps = selectSignIn();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
