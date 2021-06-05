import React, { Component } from 'react';

import RegisterForm from './registerForm';


class Register extends Component {
    constructor(props) {
        super(props);
    
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    }
    handleSuccessfulLogin(userType){
        this.props.handleSuccessfulLogin(userType);
    }
    render() {
        return (
            <div className='register'>
                <RegisterForm 
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                className='register__form' />
            </div>
        );
    }
}

export default Register;