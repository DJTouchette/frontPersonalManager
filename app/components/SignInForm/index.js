/**
*
* SignInForm
*
*/

import React from 'react';
import { TextFieldStyled, LinkStyled } from './styled';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { secondaryTextColor } from 'colors';
import { Field, reduxForm } from 'redux-form';

const emailInput = function(field) {
  return (
          <TextFieldStyled
            {...field.input}
            value={field.value}
            floatingLabelText="Email"
            type="email"
          />);
}

const passwordInput = (field) => 
          <TextFieldStyled
            {...field.input}
            value={field.value}
            floatingLabelText="Password"
            type="password"
          />;

function SignInForm(props) {
  const { err } = props;
  return (
    <form onSubmit={props.handleSubmit.bind(this)}>
    	<Card style={{ background: '#fcfcfc' }}>
    		 <CardTitle 
    		 	title="Login"
    		 />
    		<CardText>
          { err ? <p>{err}</p> : null }
          <Field
            name="email"
            component={emailInput}
          />
	    		<br/>
          <Field 
            name="password"
            component={passwordInput}
          />
	    		<br/>
	    		<br/>
	    		<LinkStyled 
            to='/forgot'
          >
            Forgot password?
          </LinkStyled>
    		</CardText>
        <hr style={{ maxWidth: '80%' }}/>
    		<CardActions style={{ textAlign: 'center' }}>
      		<RaisedButton
      			label="Signup"
      			secondary
            type="submit"
      		/>
          <RaisedButton
            label="Login"
            secondary
            type="submit"
          />
    		</CardActions>
  		</Card>
    </form>
  );
}

const ConnectToRedux = reduxForm({
  form: 'signIn'
})(SignInForm);


export default ConnectToRedux;
