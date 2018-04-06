import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import ShowPage from "./components/ShowPage";

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <ShowPage/>
      </div>
    );
  }
}

export default App;
