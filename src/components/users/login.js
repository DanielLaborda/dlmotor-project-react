import React, { Component } from 'react';

import LoginForm from './loginForm';

import { connect} from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);

  }
  onSubmit = (fields) => {
    console.log(fields.email);
    // axios.get("http://127.0.0.1:5000/sessions",{
    //   "email":fields.email,
    //   "password":fields.password
    // }, {withCredentials: true}
    // ).then(response =>
    //   console.log(response.data)
    // )
    // this.props.handleSuccessfulLogin();
    // this.props.history.push('/account');
  }
  render() {
    return (
      <div className='sign-in'>
          <LoginForm onSubmit={this.onSubmit} className='sign-in__form' />
      </div>
    );
  }
}

Login = connect(null, actions)(Login);

export default Login;