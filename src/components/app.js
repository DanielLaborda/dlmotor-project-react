import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
