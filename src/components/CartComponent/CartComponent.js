import React, { Component } from 'react'
import {connect} from 'react-redux'
import imgLoader from '../../utils/imgLoader';
import './CartComponent.css';

const RenderCartItems = (cartItems) => {
  console.log(cartItems);
  const {id, name, img, count} = cartItems
  return (
    <div key={id} className="cart-item">
      <div className="cart-robo-img">{imgLoader(img)}</div>
      <div className="cart-items-wrapper">
        <div className="cart-robo-item"><b>Name:</b> {name}</div>
        <div className="cart-robo-item"><b>Id:</b> {id}</div>
        <div className="cart-robo-item"><b>Count:</b> {count}</div>
      </div>
    </div>
  );
}

class CartComponent extends Component {
  render() {
    const cartItems = Object.values(this.props.db).filter((item)=>{
      return (item.count > 0)
    })
    return (
      <div className="cart">
        <div className="cart-heading">Your Cart items</div>
        {cartItems.map((item) => {
          return RenderCartItems(item);
        })
        }
        {/* <button className="cart-checkout">Checkout</button> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    db: state.data
  }
}

export default connect(mapStateToProps)(CartComponent)
