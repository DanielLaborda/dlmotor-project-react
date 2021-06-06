import React, { Component } from 'react';

import LoginForm from './loginForm';


class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  }
  handleSuccessfulLogin(user){
    this.props.handleSuccessfulLogin(user);
  }
  handleUnsuccessfulLogin(){
      this.props.handleUnsuccessfulLogin();
  }
  
  render() {
    const { className } = this.props;

    return (
      <div className={`${className}`}>
          <LoginForm 
          className={`${className}__form`}
          handleSuccessfulLogin={this.handleSuccessfulLogin}
          handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
          />
      </div>
    );
  }
}


export default Login;