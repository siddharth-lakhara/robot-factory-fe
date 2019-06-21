import React, { Component } from 'react'
import RobotsItems from './RobotsItem';
import createDB from '../../utils/db';
import './robots.css';

const RobotsItemsRenderer = ({ data, incrementCount }) => {
  // debugger;
  if (data) {
    const robotItems = Object.keys(data).map((robotId) => {
      return (
        <RobotsItems 
          key={robotId}
          data={data[robotId]}
          incrementCount={incrementCount}
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
    console.log('hi');
    const state = { ...this.state.db };
    debugger;
    // state[id].count += 1;
    // this.setState(state);
  }

  render() {
    const { incrementCount } = this;
    const { db } = this.state;
    return (
      <div className="robots">
        <div className="robots-heading">
          Available robots
        </div>
        <div className="robots-wrapper">
          <RobotsItemsRenderer data={db} incrementCount={incrementCount}/>
        </div>
      </div>
    )
  }
}
