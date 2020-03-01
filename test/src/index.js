import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from './headings'
import * as serviceWorker from './serviceWorker';

var names = (
    <div>
    <App name='MaxWilliam'> I will teach better </App>
    <App name='Dilip'> I will teach Average </App>
    </div>
);

ReactDOM.render(<Head />,document.getElementById('Head'))
ReactDOM.render(names, document.getElementById('Body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
