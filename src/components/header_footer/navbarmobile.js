import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class NavbarMobile extends Component {

    render() {
        const { userLogged, loggedInStatus } = this.props;
        return(
            <div className='navbarMobile'>
                
                <div className="navbarMobile-side" style={{display: (this.props.mobileShowHide)? "block" : "none" }}>
                    {   
                        (userLogged.length > 0)?
                            ""
                        :
                            (userLogged.userType)?
                                (userLogged.userType[0].usertype_name == "Administrator")?
                                   <div className="navbarMobile-link-wrapper">
                                       <NavLink exact to="/quotes" className='navbarMobile__option' activeClassName="active-mobile">
                                           Quotes
                                        </NavLink>
                                    </div>
                                :(userLogged.userType[0].usertype_name == "Customer")?
                                    <div className="navbarMobile-link-wrapper">
                                        <NavLink exact to="/quotes" className='navbarMobile__option' activeClassName="active-mobile">
                                            My quotes
                                        </NavLink>
                                    </div>  
                                :""      
                            :""

                    }
                    
                    <div className="navbarMobile-link-wrapper">
                        <NavLink exact to="/categories" className='navbarMobile__option' activeClassName="active-mobile">
                            Categories
                        </NavLink>
                    </div>
                    <div className="navbarMobile-link-wrapper">
                        <NavLink exact to="/garage" className='navbarMobile__option' activeClassName="active-mobile">
                            Garage
                        </NavLink>
                    </div>
                    <div className="navbarMobile-link-wrapper">
                        <NavLink exact to="/racingTeam" className='navbarMobile__option' activeClassName="active-mobile">
                            Racing team
                        </NavLink>
                    </div>
                    <div className="navbarMobile-link-wrapper">
                        {(loggedInStatus=="LOGGED_IN") ?
                        <NavLink exact to="/login"  className='navbarMobile__option' onClick={this.handleSuccessfulLogout} activeClassName="active-mobile">Logout</NavLink>
                        :
                        <NavLink exact to="/login"  className='navbarMobile__option' activeClassName="active-mobile">Login</NavLink>
                        }
                    </div>

                </div>
                
            </div>
        )
    }
    
   
}

export default withRouter(NavbarMobile);
