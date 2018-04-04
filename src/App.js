import React, { Component } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList'
import './App.css';
import { Row, Col } from 'react-materialize'

class App extends Component {

  render() {
    return (
      <div>
        

        <Row>
          <Col s={6} className='left-column'>
            <Header />
          </Col>

          <Col s={6} className='right-column'>
            <RecipeList />
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
