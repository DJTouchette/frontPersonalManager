/*
 *
 * SignIn
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import {selectSignIn} from './selectors';
import SignInForm from 'components/SignInForm';
import RaisedButton from 'material-ui/RaisedButton';
import { FlexCentered, NoAuth } from './styled';
import { signInRequest, siginInFailed, signUpRequest } from './actions';
const EMPTY_FIELDS = 'All fields must be filled.';

export class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  handleToggle() {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { values } = this.props.form.signIn;

    if (!values) return this.props.siginInFailed(EMPTY_FIELDS);
    this.state.isLogin ? 
      this.props.signInRequest(values.email, values.password) :
      this.props.signUpRequest(values.email, values.password);
  }

  render() {
    const { errMsg } = this.props.signIn;
    const { isLogin } = this.state;
    const { noAuth } = this.props.location.query;

    return (
      <FlexCentered>
        { noAuth ? <NoAuth>Please Login</NoAuth> : null }
      	<SignInForm 
          handleSubmit={this.handleSubmit.bind(this)}
          err={errMsg}
          isLogin={isLogin}
          onToggle={this.handleToggle.bind(this)}
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
    siginInFailed: (err) => dispatch(siginInFailed(err)),
    signUpRequest: (email, password) => dispatch(signUpRequest(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
