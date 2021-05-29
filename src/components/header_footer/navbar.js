import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div>
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/">Home</NavLink>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Navbar);