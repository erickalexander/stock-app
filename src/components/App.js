import React, { Component } from 'react';
import '../App.css';
import StockContainer from './StockContainer'
class App extends Component {
  
  render() {
    
    return (
      <div className="App">
      <h1>Stock Market App</h1>
      <StockContainer />
      </div>
    );
  }
}

export default App;
