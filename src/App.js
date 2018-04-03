import React, { Component } from 'react';
import './App.css';
import RecipeList from "./components/RecipeList";



class App extends Component {

  render() {
    return (
      <div>
          <RecipeList/>
      </div>
    );
  }
}

export default App;
