import React, { Component } from 'react'
import RobotsItems from './RobotsItem';
import createDB from '../../utils/db';
import './robots.css';

const RobotsItemsRenderer = ({ data, incrementCount, decrementCount }) => {
  if (data) {
    const robotItems = Object.keys(data).map((robotId) => {
      return (
        <RobotsItems 
          key={robotId}
          data={data[robotId]}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      );
    });
    return robotItems;
  } else {
    return null;
  }
}
export default class Robots extends Component {
  state = {
    db: createDB()
  }

  incrementCount = (id) => {
    const state = { ...this.state.db };
    state[id].count += 1;
    this.setState({
      db: {...state}
    });
  }

  decrementCount = (id) => {
    const state = { ...this.state.db };
    state[id].count = state[id].count > 0 ? state[id].count-1 : state[id].count;
    this.setState({
      db: { ...state }
    });
  }

  render() {
    const { incrementCount, decrementCount } = this;
    const { db } = this.state;
    return (
      <div className="robots">
        <div className="robots-heading">
          Available robots
        </div>
        <div className="robots-wrapper">
          <RobotsItemsRenderer 
            data={db} 
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        </div>
      </div>
    )
  }
}
