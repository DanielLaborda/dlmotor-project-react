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
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    }

    showLogin(e) {
        this.setState({ show: "Login" });
        let activeOption = document.getElementsByClassName('user_active_op');
        if (activeOption){
            [].forEach.call(activeOption, function(el) {
                el.classList.remove("user_active_op");
            });
        }
        e.target.classList.add('user_active_op');
    }

    showRegister(e) {
        this.setState({ show: "register" });
        let activeOption = document.getElementsByClassName('user_active_op');
        if (activeOption){
            [].forEach.call(activeOption, function(el) {
                el.classList.remove("user_active_op");
            });
        }
        e.target.classList.add('user_active_op');
    }

    handleSuccessfulLogin(user) {
        this.props.handleSuccessfulLogin(user);
    }

    handleUnsuccessfulLogin() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
            <div className='users'>
                <div className="users__blur">
                    <div className='users__content'>
                        <ul id='user_option' className={`users__content__options`}>
                            <li className={`users__content__options__option user_active_op`} onClick={(e) =>  this.showLogin(e)}>Login</li>
                            <li className={`users__content__options__option`} onClick={(e) => this.showRegister(e)}>Register</li>
                        </ul>
                        {(this.state.show === 'Login') ?
                            <Login 
                                className="login"
                                handleSuccessfulLogin={this.handleSuccessfulLogin} 
                                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                                />
                        : 
                            <Register 
                                typeUser={2}
                                className="register"
                                handleSuccessfulLogin={this.handleSuccessfulLogin} 
                                />
                        }
                    </div>     
                </div>           
            </div>
        );
    }

}

export default Users;