/**
*
* SignInForm
*
*/

import React from 'react';
import { TextFieldStyled, LinkStyled, ToggleDiv } from './styled';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
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
  const { err, isLogin, onToggle, handleSubmit } = props;
  let text = {
    label: 'Signup?',
    title: 'Login'
  };

  if (!isLogin) {
    text.label = 'Login?';
    text.title = 'Signup';
  };

  return (
    <form onSubmit={handleSubmit.bind(this)}>
    	<Card style={{ background: '#fcfcfc' }}>
        <ToggleDiv>
          <Toggle
            label={text.label}
            onToggle={onToggle.bind(this)}
          />
        </ToggleDiv>
    		 <CardTitle 
    		 	title={text.title}
    		 />
    		<CardText>
          { err ? <p style={{ color: 'red' }}>{err}</p> : null }
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
          { isLogin ?
	    		<LinkStyled 
            to='/forgot'
          >
            Forgot password?
          </LinkStyled> : 
          
          null
          }
    		</CardText>
        <hr style={{ maxWidth: '80%' }}/>
    		<CardActions style={{ textAlign: 'center' }}>
          <RaisedButton
            label={text.title}
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
