import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div>
         <iframe
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/69d0c8a7-3ee8-444a-afb5-a514fb6a3bf1">
          </iframe>
        </div>
      </div>
    );
  }
}

export default App;
