import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  handleClickIncrease = (event) => {
    this.props.dispatch({ type: 'INCREASE_SPEED' });
  };

  handleClickDecrease = (event) => {
    this.props.dispatch({ type: 'DECREASE_SPEED' });
  };

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.handleClickIncrease}>Increase Speed</button>
        <p>SPEED: GOES HERE</p>
        <button onClick={this.handleClickDecrease}>Decrease Speed</button>
      </div>
    );
  }
}

export default connect()(SpeedControl);
