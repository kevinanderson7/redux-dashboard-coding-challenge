import React, { Component } from 'react';

import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = {
    passengerEntered: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onAddPassengerClick = (event) => {
    this.props.dispatch({
      type: 'ADD_PASSENGER',
      payload: this.state,
    });
    this.setState({
      passengerEntered: '',
    });
  };

  render() {
    const passengerArray = this.props.store.passengerReducer.map(
      (item, index) => {
        return <li key={index}>{item.passengerEntered}</li>;
      }
    );
    return (
      <div>
        <h2>Passengers</h2>

        <input
          onChange={this.onInputChange('passengerEntered')}
          type="text"
          name="name"
          placeholder="Enter Name"
          value={this.state.passengerEntered}
        />
        <button onClick={this.onAddPassengerClick}>Add Passenger</button>

        <ul>PASSENGER LIST: {passengerArray}</ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Passengers);
