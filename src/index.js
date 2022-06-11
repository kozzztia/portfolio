import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const defaultState = {
  cash: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH": return {
      ...state,
      cash: state.cash + +action.payload
    }
    case "GET_CASH": return {
      ...state,
      cash: state.cash - +action.payload
    }
    case "RESET_CASH": return {
      ...state,
      cash: state.cash = 0
    }
    default: return state
  }
}

const store = createStore(reducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

