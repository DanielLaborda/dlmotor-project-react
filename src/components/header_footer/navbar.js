import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        const stylelogo = {
            content: "../../localImages/logo.png"
        }
        return(
            <div>
                <div className="logo-side">
                <NavLink exact to="/">
                    <img style={stylelogo} />
                </NavLink>
                </div>
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/">Home</NavLink>
                    </div>
                </div>
            </div>
        )
    }
    
   
}
export default withRouter(Navbar);
