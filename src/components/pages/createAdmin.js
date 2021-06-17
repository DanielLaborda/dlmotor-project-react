import React, { Component } from "react";
import Register from "../users/register";

class CreateAdmin extends Component {
    constructor(props) {
        super(props);

        
        // this.showRegister = this.showRegister.bind(this);
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
                        <Register 
                            typeUser={1}
                            className="register"
                            handleSuccessfulLogin={this.handleSuccessfulLogin} 
                        />
                    </div>     
                </div>           
            </div>
        );
    }

}

export default CreateAdmin;