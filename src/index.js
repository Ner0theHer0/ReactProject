import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import wp from './img/wp.jpg'


ReactDOM.render(
  <React.StrictMode>
    <div id='mid' style={{backgroundImage: `url(${wp})`}}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

