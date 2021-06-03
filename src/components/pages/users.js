import React, { Component } from "react";
import Register from "../users/register";
import Login from "../users/login";

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: "Login"
        };
        this.showLogin = this.showLogin.bind(this);
        this.showRegister = this.showRegister.bind(this);
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    }
    showLogin() {
        this.setState({ show: "Login" });
    }
    showRegister() {
        this.setState({ show: "register" });
    }
    handleSuccessfulLogin() {
        console.log('this.props.handleSuccessfulLogin();');
    }
    handleUnsuccessfulLogin() {
        console.log('this.props.handleUnsuccessfulLogin();');
    }
    render() {
        return (
            <div className='users'>
                <ul>
                    <li onClick={this.showLogin}>Login in</li>
                    <li onClick={this.showRegister}>register</li>
                </ul>
                {(this.state.show === 'Login') ?
                    <Login handleSuccessfulLogin={this.handleSuccessfulLogin} handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}/>
                    : 
                    <Register />
                }
                
            </div>
        );
    }

}

export default Users;