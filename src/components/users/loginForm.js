import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      response_error: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
        [event.target.name]: event.target.value,
        errorText: ""
    });
  }

  handleLoginSubmit(event){
    axios.get(`http://127.0.0.1:5000/userInfo/${this.state.email}/${this.state.password}`,
    ).then(response =>{
      
      if (response.data.response=='Accepted') {
        this.props.handleSuccessfulLogin(response.data);
        this.setState({
          redirect:true
        });
      } else {
        this.setState({
          response_error: response.data.response
        });
        this.props.handleUnsuccessfulLogin();
      }
    
    }
    ).catch(error => {
      this.setState({
        response_error: "An error occured"
      });
    });
    // this.props.handleSuccessfulLogin();
    event.preventDefault();
  }

  render() {
    const { className } = this.props;
    const links = [
      {
        index: 0,
        title: 'Not registered? Create account here',
        onClick: () => "history.push('/signup')"
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
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }
    return (
        <form onSubmit={this.handleLoginSubmit} className={`${className}`}>
          {(this.state.response_error)?
            <div className={`${className}__error`}>
              {this.state.response_error}
            </div>
          :''}
          
          <div className={`${className}-group`}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
            <label>Email</label>
          </div>
          <div className={`${className}-group`}>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              required
              onChange={this.handleChange}
            />
            <label>Password</label>
          </div>

          <button className={`${className}__submit`} type="submit">Login</button>

        </form>

        
    );
  }
}

export default LoginForm;