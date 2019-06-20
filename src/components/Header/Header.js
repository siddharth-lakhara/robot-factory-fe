import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-home">
          <i class="material-icons">android</i>
        </div>
        <div className="Header-title">Robo Factory</div>
        <div className="Header-cart">
          <i class="material-icons">shopping_cart</i>
        </div>
      </div>
    )
  }
}
