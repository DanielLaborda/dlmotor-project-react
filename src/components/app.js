import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import history from "../history";
import Layout from './layout';
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route path='/' exact component={Home}/>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}
