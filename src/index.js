// require('../scss/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {compose, createStore, applyMiddleware } from 'redux';
import allReducers from '../src/dev/js/containers/common/functions/allReducers';
import { hashHistory } from 'react-router';
import axios from 'axios';

/* Configure Store for Redux */
const logger = createLogger();
const createAppStore = compose(
	applyMiddleware(thunkMiddleware),applyMiddleware(logger)
)(createStore);

export function configureStore(initialState){
	const store = createAppStore(allReducers, initialState);
	return store;
};
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
