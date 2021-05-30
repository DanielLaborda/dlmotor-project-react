import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    componentDidMount() {
        document.getElementById("logo").src = require('../../localImages/logo.png');
    }
    render() {
        return(
            <div>
                <div className="logo-side">
                <NavLink exact to="/">
                    <img id='logo'/>
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
