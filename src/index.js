import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css"



ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
  <App />
  </Router>,

  document.getElementById('root'));
