import React from 'react';
import ReactDOM from 'react-dom';

import state from './state.json';
import App from './App';

import './index.css';

ReactDOM.render(<App state={state}/>, document.getElementById('root'));
