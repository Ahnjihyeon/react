import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextApp from './ContextApp'
import ConApp from './ConApp'


ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<ContextApp />, document.getElementById('context-practice'))
ReactDOM.render(<ConApp />, document.getElementById('con-app'));