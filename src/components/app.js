import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

import Navbar from './header_footer/navbar';
import Garage from './pages/garage';
import Home from './pages/home';
import RacingTeam from './pages/racingTeam';
import Users from './pages/users';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      userTypeLogged: ""
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }
  handleSuccessfulLogin(userType) {
    
    this.setState({
      loggedInStatus: "LOGGED_IN",
      userTypeLogged: userType
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
      userTypeLogged: ""
    });
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navbar userTypeLogged={this.state.userTypeLogged} loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
          
            <Switch>
              <Route path='/' exact component={Home}/>
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
