import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavItem } from 'react-materialize';

class Navibar extends Component {

  render() {
    return (
      <div>
        <Navbar brand='Chefbot' left>
            <NavItem href='get-started.html'>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navibar;
