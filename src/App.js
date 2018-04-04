import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Navibar from './components/Navibar';

class App extends Component {

  render() {
    return (
      <div>
        <Navibar />
        <Header />
      </div>
    );
  }
}

export default App;
