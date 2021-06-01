import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

import Navbar from './header_footer/navbar';
import Garage from './pages/garage';
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navbar />
          
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/garage' exact component={Garage}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
