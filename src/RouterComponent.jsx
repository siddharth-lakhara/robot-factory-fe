import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import RobotsList from './components/Robots';
import CartComponent from './components/CartComponent';
import CheckoutComponent from './components/CheckoutComponent';
import NoMatch from './components/NoMatch';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="App-body">
          <Switch>
            <Route exact path="/" component={RobotsList} />
            <Route path="/cart" component={CartComponent} />
            <Route path="/checkout" component={CheckoutComponent} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
