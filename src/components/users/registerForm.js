import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';


class RegisterForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
          <form onSubmit={handleSubmit} className={`${className}`}>
            <Field className={`${className}__name`}
            type='text'
            placeholder='Name'
            name='name'
            component={FormInput}/>

            <Field className={`${className}__firstName`}
            type='text'
            placeholder='FirstName'
            name='firstName'
            component={FormInput}/>

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
            title='Register'
            name='register'
            component={FormButton}/>

        </form>
    );
  }
}

RegisterForm = reduxForm({
    form: 'RegisterForm'
})(RegisterForm);  

export default RegisterForm;