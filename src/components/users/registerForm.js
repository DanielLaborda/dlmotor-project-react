import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';


class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      response_error: "",
      user_name: "",
      user_surname: "", 
      user_email: "",
      user_password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
        [event.target.name]: event.target.value,
        errorText: ""
    });
  }
  handleRegisterSubmit(event){
    axios.post("http://127.0.0.1:5000/users",
      {
          users_name: this.state.user_name,
          users_surname: this.state.user_surname,
          users_email: this.state.user_email,
          users_password: this.state.user_password,
          users_type: 2
      },{
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PUT,POST,GET"
        },
      }
    ).then(response => {
      this.props.handleSuccessfulLogin(response.data.userType[0].usertype_name);
      this.setState({
        redirect:true
      });
    })
    .catch(error => {
      this.setState({
        errorText: "An error occured"
      })
    });
    event.preventDefault();
  }
  render() {
    const { className } = this.props;
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }
    return (
          <form onSubmit={this.handleRegisterSubmit} className={`${className}`}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                value={this.state.user_name}
                required
                onChange={this.handleChange}
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="user_surname"
                placeholder="Your Surname"
                value={this.state.user_surname}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                value={this.state.email}
                required
                onChange={this.handleChange}
              />
            </div>

    
            <div>
            <input
              className={`${className}__password`}
              type="password"
              name="user_password"
              placeholder="Your password"
              value={this.state.password}
              required
              onChange={this.handleChange}
            />
          </div>
          <button className={`${className}__login`} type="submit">Register</button>


        </form>
    );
  }
}

export default RegisterForm;