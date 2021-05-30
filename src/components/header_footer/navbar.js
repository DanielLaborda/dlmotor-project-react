import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    const logo = require('../../../static/images/logo.png');
    return(
        <div>
            <div className="logo-side">
            <NavLink exact to="/">
                <img src={logo} />
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
export default withRouter(Navbar);