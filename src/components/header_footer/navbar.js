import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import logo from '../../localImages/logo.png';

class Navbar extends Component {
    
    render() {
        return(
            <div>
                <div className="logo-side">
                <NavLink exact to="/">
                    <img id='logo'
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover',
                        width: '150px',
                        height: '100px',
                        border: 'none'
                    }}
                    />
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
