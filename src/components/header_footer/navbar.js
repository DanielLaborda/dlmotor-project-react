import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faBars, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faUsers, faSignOutAlt)

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            imageLogo: '',
            nameCompany: ''
        };
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
        this.showHideMenu = this.showHideMenu.bind(this);
    }
    componentDidMount() {
        axios.get("https://apidlmotor.herokuapp.com/company/1"
        ).then(response =>{
           this.setState({
                imageLogo: response.data.company_logo,
                nameCompany: response.data.company_name
            });
        })
    }

    handleSuccessfulLogout() {
        this.props.handleSuccessfulLogout();
    }

    showHideMenu() {
        this.props.showHideMenu();
    }

    render() {
        const { userLogged, loggedInStatus } = this.props;
        return(
            <div className='navbar'>
                <div className="navbar__logo-side">
                    <NavLink exact to="/" className='navbar__logo-side__content NavLink' activeClassName="active-logo">
                        <img className='navbar__logo-side__img' src={`data:image/png;base64,${this.state.imageLogo}`} />
                        <div>{this.state.nameCompany}</div>
                    </NavLink>
                </div>
                <div className="navbar__left-side" >
                    {   
                        (userLogged.length > 0)?
                            ""
                        :
                            (userLogged.userType)?
                                (userLogged.userType[0].usertype_name == "Administrator")?
                                   <div className="nav-link-wrapper">
                                       <NavLink exact to="/quotes" className='navbar__option'>
                                           <div className='navbar__option__text' >Quotes</div>
                                        </NavLink>
                                    </div>
                                :(userLogged.userType[0].usertype_name == "Customer")?
                                    <div className="nav-link-wrapper">
                                        <NavLink exact to="/quotes" className='navbar__option'>
                                            <div className='navbar__option__text' >My quotes</div>
                                        </NavLink>
                                    </div>  
                                :""      
                            :""

                    }
                    
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/categories" className='navbar__option' >
                            <div className='navbar__option__text' >Categories</div>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/garage" className='navbar__option' >
                            <div className='navbar__option__text' >Garage</div>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/racingTeam" className='navbar__option' >
                            <div className='navbar__option__text' >Racing team</div>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        {(loggedInStatus=="LOGGED_IN") ?
                                
                            (userLogged.userType[0].usertype_name == "Administrator")?
                                <div className="navbar__options__admin">
                                    <NavLink exact to="/createadmin" className='navbar__option'>
                                        <FontAwesomeIcon className='navbar__option'  icon={ {prefix: 'fa', iconName: 'users'} } />
                                    </NavLink> 
                                    <NavLink exact to="/login"  className='navbar__option' onClick={this.handleSuccessfulLogout}>
                                        <FontAwesomeIcon className='navbar__option'  icon={ {prefix: 'fa', iconName: 'sign-out-alt'} } />
                                    </NavLink>
                                </div>
                            : 
                                <NavLink exact to="/login"  className='navbar__option' onClick={this.handleSuccessfulLogout}>
                                    <FontAwesomeIcon className='navbar__option'  icon={ {prefix: 'fa', iconName: 'sign-out-alt'} } />
                                </NavLink>                        
                            
                        :
                        <NavLink exact to="/login"  className='navbar__option'>Login</NavLink>
                        }
                    </div>

                </div>
                <div className="navbar__mobileMenu">
                    <a onClick={this.showHideMenu}>
                    <FontAwesomeIcon className='mobileMenu__icon'  icon={ {prefix: 'fa', iconName: 'bars'} } />
                    </a>
                </div>
            </div>
        )
    }
    
   
}

export default withRouter(Navbar);
