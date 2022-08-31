import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {compose, createStore } from 'redux';
import {catalogReducer} from './redux/reducer'
import {Provider} from 'react-redux'

export let store = createStore(catalogReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
let app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
app, document.getElementById('root')
);
