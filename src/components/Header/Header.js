import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
   return (
      <div className="Header">
        <Link to="/" style={{textDecoration: 'none'}}>
          <div className="Header-icon" onClick={this.redirectToHomePage}>
            <i className="material-icons">android</i>
          </div>
        </Link>
        <div className="Header-title">Robo Factory</div>
        <Link to="/cart" style={{textDecoration: 'none'}}>
          <div className="Header-icon">
            <i className="material-icons">shopping_cart</i>
          </div>
        </Link>
      </div>
    )
  }
}
