import React, { Component } from 'react';

import RegisterForm from './registerForm';

class Register extends Component {
    constructor(props) {
        super(props);
    
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    }
    handleSuccessfulLogin(user){
        this.props.handleSuccessfulLogin(user);
    }
    render() {
        const { className, typeUser } = this.props;
        return (
            <div className={`${className}`}>
                <RegisterForm 
                typeUser={typeUser}
                className={`${className}__form`}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                className='register__form' />
            </div>
        );
    }
}

export default Register;