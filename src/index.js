import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import calcGauApp from "./reducers";

const store = createStore(
    calcGauApp,
    {
        types: [
            {name: "foo", levels: [{max: 1000, price: 3.45}, {max: null, price: 2.34}]},
            {name: "bar", levels: [{max: null, price: 1.23}]},
            {name: "baz", levels: [{max: 1000, price: 3.45}, {max: 20000, price: 2.34}, {max: null, price: 1.23}]}
        ]
    }
);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
