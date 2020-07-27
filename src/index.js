import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducers here!

const speedReducer = (state = 0, action) => {
  if (action.type === 'INCREASE_SPEED') {
    return state + 1;
  } else if (action.type === 'DECREASE_SPEED') {
    return state - 1;
  }

  return state;
};

const passengerReducer = (state = '', action) => {
  if (action.type === 'ADD_PASSENGER') {
    return action.payload;
  }

  return state;
};

// be sure to combine your reducers!
const storeInstance = createStore(
  combineReducers({
    speedReducer,
    passengerReducer,
  }),
  // reducers,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
