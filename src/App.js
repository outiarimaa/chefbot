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
            width="40%"
            height="600px"
            src="https://console.dialogflow.com/api-client/demo/embedded/52606f9c-781f-4d50-8fc0-b990b7cc48f9">
         </iframe>
        </div>
      </div>
    );
  }
}

export default App;
