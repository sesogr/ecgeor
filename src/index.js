import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import calcGauApp from "./reducers";

window.store = createStore(
    calcGauApp,
    window.initialStoreState || {types: []}
);
ReactDOM.render(
    <Provider store={window.store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
