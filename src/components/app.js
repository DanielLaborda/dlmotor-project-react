import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

import Navbar from './header_footer/navbar';
import NavbarMobile from './header_footer/navbarmobile';
import Categories from './pages/categories';
import Garage from './pages/garage';
import Home from './pages/home';
import RacingTeam from './pages/racingTeam';
import Users from './pages/users';
import Vehicles from './pages/vehicles';
import Configuration from './pages/configuration';
import Quotes from './pages/quotes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      userLogged: {},
      mobileShowHide: false
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    this.showHideMenu = this.showHideMenu.bind(this);
  }
  handleSuccessfulLogin(user) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      userLogged: user,
      mobileShowHide: false
    });
  }

  handleUnsuccessfulLogin() {
    console.log('no te logeaste');
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    console.log('Saliste te logeaste');
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      userLogged: {}
    });
  }

  showHideMenu() {
    if(this.state.mobileShowHide === false){
        this.setState({
            mobileShowHide: true
        });
    } else {
        this.setState({
            mobileShowHide: false
        });
    }  
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navbar userLogged={this.state.userLogged} loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            showHideMenu={this.showHideMenu}
            />
            <NavbarMobile
              userLogged={this.state.userLogged} loggedInStatus={this.state.loggedInStatus}
              mobileShowHide={this.state.mobileShowHide} />
            
          
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/categories' exact component={Categories}/>
              <Route path='/vehicles/:id' component={Vehicles}/>
              <Route path='/configuration/:id' render={ props=>(
                <Configuration 
                  {...props}
                  userLogged={this.state.userLogged} 
                />
              )}/>
              <Route path='/quotes' render={props => (
                <Quotes
                  {...props}
                  userLogged={this.state.userLogged} 
                />                
              )}/>
              <Route path='/garage' exact component={Garage}/>
              <Route path='/racingTeam' exact component={RacingTeam}/>
              <Route path='/login' render={ props=>(
                <Users 
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
