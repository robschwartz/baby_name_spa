import React, { Component } from 'react';
import './App.css';
import NamesContainer from './components/NamesContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Baby Name List</h1>
        </div>
        <NamesContainer />
      </div>
    );
  }
}

export default App;