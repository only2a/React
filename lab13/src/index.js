import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { compose, createStore } from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './redux/reducer';

export let store = createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
let app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
  app, document.getElementById('root')
);
