import React, { Component } from 'react';
import './App.css';
import Postfeed from './components/postfeed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <center>
          <Postfeed />
        </center>
      </div>
    );
  }
}

export default App;
