import React, { Component } from 'react';
import './App.css';
import Postfeed from './components/postfeed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Postfeed />
      </div>
    );
  }
}

export default App;
