import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class LoginForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        index: 0,
        title: 'Not registered? Create account here',
        onClick: () => history.push('/signup')
      },
      {
        index: 1,
        title: 'Forgot account email?',
        onClick: () => console.log('forgot email')
      },
      {
        index: 2,
        title: 'Forgot password?',
        onClick: () => console.log('forgot password')
      }
    ];
    return (
        <form onSubmit={handleSubmit} className={`${className}`}>
            <Field className={`${className}__email`}
            type='email'
            placeholder='Email'
            name='email'
            component={FormInput}/>
    
            <Field className={`${className}__password`}
            type='password'
            placeholder='Password'
            name='password'
            component={FormInput}/>
            
            <div className={`${className}__line`}></div>
            <Field className={`${className}__login`}
            type='submit'
            title='Login'
            name='login'
            component={FormButton}/>

        </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'LoginForm'
})(LoginForm);

export default LoginForm;