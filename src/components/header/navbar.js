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


                {/* <ul className={click ? "navbar__options active" : "navbar__options"}>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        <a onClick={() => history.push('/categories')}>
                            <div className='background-yellow' />
                            <div className='background-blue' />
                            <div className='text' >Modelos</div>
                        </a>
                    </li>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        
                        <a onClick={() => history.push('/garage')}>
                            <div className='background-yellow' />
                            <div className='background-blue' />
                            <div className='text' >Garage</div>
                        </a>
                    </li>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        <a onClick={() => history.push('/racing-team')}>
                            <div className='background-yellow' />
                            <div className='background-blue' />
                            <div className='text' >Racing team</div>
                        </a>
                    </li>                   
                </ul> */}
                {/* <a onClick={() => history.push('/users')}>user<i className="far fa-user"/></a> */}
                    
                {/* <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                    <div className="menu-icon">
                        <i className="fas fa-bars"/> 
                    </div>
                    ) : (
                    <div className="menu-icon">
                        <i className="fas fa-bars"/> 
                    </div>
                    )}
                </div>
               */}
            </div>
        );
    
}

export default Navbar;