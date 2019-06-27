import React, { Component } from 'react'
import RobotsItems from './RobotsItem';
import './robots.css';
import { connect } from 'react-redux';
import {incrementCount, decrementCount} from '../../redux/actions/actions';

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

class Robots extends Component {
  render() {
    const { db, incrementCount, decrementCount } = this.props;
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

const mapStateToProps = (state) => {
  return {
    db: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (id) => (dispatch(incrementCount(id))),
    decrementCount: (id) => (dispatch(decrementCount(id)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Robots)
