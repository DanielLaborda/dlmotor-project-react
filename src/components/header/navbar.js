import React from 'react';
import Logo from '../../../static/images/logo.png';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
        return (
            <div className='navbar'>
                <div className='navbar__logo'>
                    <NavLink exact to="/">
                        <img src={Logo} />
                        <div className='navbar__title'>DLMotor</div>
                    </NavLink>
                </div>

                <div className="nav-wrapper">
                    <div className="left-side navbar__options">
                        <div className="nav-link-wrapper navbar__options__option">
                            <NavLink exact to="/categories" activeClassName="av-link-active">
                                <div className='background-yellow' />
                                <div className='background-blue' />
                                <div className='text' >Categories</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default withRouter(Navbar);