import React, { Component } from 'react'
import imgLoader from '../../utils/imgLoader';

export default class RobotsItem extends Component {
  render() {
    const { data, incrementCount } = this.props;
    // debugger;
    return (
      <div className="robots-items">
        <div className="robo-img">{imgLoader(data.img)}</div>
        <div className="robo-name">{data.name}</div>
        <div className="robots-items-counter">
          <button className="counter-decr" onClick={() => {incrementCount(data.id)}}>-</button>
          <div className="counter-count">{data.count}</div>
          <button className="counter-incr">+</button>
        </div>
      </div>
    )
  }
}
