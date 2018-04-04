import React, { Component } from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize'

class Navbar extends Component {

  render() {
    return (
      <div>
        <Navbar brand='ChefBot' right>
        </Navbar>
      </div>
    );
  }
}

export default Navbar;
