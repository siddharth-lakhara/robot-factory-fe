import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import RobotsList from './components/Robots';
import CartComponent from './components/CartComponent';
import CheckoutComponent from './components/CheckoutComponent';
import NoMatch from './components/NoMatch';

function App() {
    return (
      <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={RobotsList} />
          <Route path="/cart" component={CartComponent} />
          <Route path="/checkout" component={CheckoutComponent} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </div > 
    );
  }

export default App;
