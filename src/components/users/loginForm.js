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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
        [event.target.name]: event.target.value,
        errorText: ""
    });
  }

  handleSubmit(event){
    
    axios.get(`http://127.0.0.1:5000/userInfo/${this.state.email}/${this.state.password}`,
    ).then(response =>{
      
      if (response.data.response=='Accepted') {
        console.log('aceptado');
        this.props.handleSuccessfulLogin(response.data.userType[0].usertype_name);
        this.setState({
          redirect:true
        });
      } else {
        console.log('denegado');
        this.props.handleUnsuccessfulLogin();
      }
    
    }
    ).catch(error => {
      this.setState({
        response_error: "An error occured"
      })
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
        <form onSubmit={this.handleSubmit} className={`${className}`}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              required
              onChange={this.handleChange}
            />
          </div>
          <button className={`${className}__login`} type="submit">Login</button>

        </form>

        
    );
  }
}

export default LoginForm;