import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            imageLogo: '',
            nameCompany: ''
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:5000/company/1"
        ).then(response =>{
           this.setState({
                imageLogo: response.data.company_logo,
                nameCompany: response.data.company_name
            });
        })
    }
    render() {
        console.log(this.state);
        return(
            <div className='navbar'>
                <div className="navbar__logo-side">
                    <NavLink exact to="/" className='navbar__logo-side__content NavLink'>
                        <img className='navbar__logo-side__img' src={`data:image/png;base64,${this.state.imageLogo}`} />
                        <div>{this.state.nameCompany}</div>
                    </NavLink>
                </div>
                <div className="navbar__left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/categories" className='navbar__option'>
                            <div className='navbar__option__text' >Categories</div>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/garage" className='navbar__option'>
                            <div className='navbar__option__text' >Garage</div>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/racingTeam" className='navbar__option'>
                            <div className='navbar__option__text' >Racing team</div>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/login" activeClassName="av-link-active">Login</NavLink>
                    </div>

                </div>
            </div>
        )
    }
    
   
}

export default withRouter(Navbar);
