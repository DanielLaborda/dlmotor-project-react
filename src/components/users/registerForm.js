import React, { Component } from 'react';
import axios from 'axios';

import CreateModal from '../modals/createModal';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      errorMessage: '',
      response_submit: "",
      user_name: "",
      user_surname: "", 
      user_email: "",
      user_password: "",
      user: ""
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
      if(response.data.response == "Accepted"){
        this.props.handleSuccessfulLogin(response.data);
        this.setState({
          openModal:true,
          response_submit: 'User created',
          user: response.data
        });
        document.getElementById('user_option').style.display = "none";
      } else {
        this.setState({errorMessage:response.data.response});
      
      }
    })
    .catch(error => {
      this.setState({
        response_submit: "An error occured"
      })
    });
    event.preventDefault();
  }
  render() {
    const { className } = this.props;
    if (this.state.openModal) {
      return <CreateModal message={this.state.response_submit} direction='/' user={this.state.userType} openModal={this.state.openModal}/>
    }
    return (
          <form onSubmit={this.handleRegisterSubmit} className={`${className}`}>
            {(this.state.errorMessage)?
              <div className={`${className}__error`}>
                {this.state.errorMessage}
              </div>
            :''}
            
            <div className={`${className}-group`}>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                value={this.state.user_name}
                required
                onChange={this.handleChange}
              />
              <label>Your name</label>
            </div>
            
            <div className={`${className}-group`}>
              <input
                type="text"
                name="user_surname"
                placeholder="Your Surname"
                value={this.state.user_surname}
                required
                onChange={this.handleChange}
              />
              <label>Your surname</label>
            </div>

            <div className={`${className}-group`}>
              <input
                type="email"
                name="user_email"
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
                name="user_password"
                placeholder="Your password"
                value={this.state.password}
                required
                onChange={this.handleChange}
              />
              <label>Password</label>
            </div>
          <button className={`${className}__submit`} type="submit">Register</button>


        </form>
    );
  }
}

export default RegisterForm;