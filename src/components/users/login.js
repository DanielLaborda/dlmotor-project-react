import React, { Component } from 'react';

import LoginForm from './loginForm';


class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  }
  handleSuccessfulLogin(userType){
    this.props.handleSuccessfulLogin(userType);
  }
  handleUnsuccessfulLogin(){
      this.props.handleUnsuccessfulLogin();
  }
  
  render() {
    return (
      <div className='sign-in'>
          <LoginForm 
          handleSuccessfulLogin={this.handleSuccessfulLogin}
          handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
          className='sign-in__form' />
      </div>
    );
  }
}


export default Login;