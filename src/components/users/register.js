import React, { Component } from 'react';

import { connect} from 'react-redux';
import * as actions from '../../actions';
import RegisterForm from './registerForm';


class Register extends Component {
    onSubmit = (fields) => {
        console.log('registrar');
        console.log(fields);
        // this.props.signIn(fields);
        // this.props.history.push('/account');
    }
    render() {
        return (
            <div className='register'>
                <RegisterForm onSubmit={this.onSubmit} className='register__form' />
            </div>
        );
    }
}

Register = connect(null, actions)(Register);

export default Register;