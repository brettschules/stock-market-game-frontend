import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/index'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
  , document.getElementById('root')
);
