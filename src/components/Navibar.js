import React, { Component } from 'react';
import '../App.css';
import { NavItem, Dropdown, Button } from 'react-materialize';

class Navibar extends Component {

  render() {
    return (
      <div>
            <Dropdown trigger={
                <Button>Profiili</Button>
            }>
                <NavItem>one</NavItem>
                <NavItem>two</NavItem>
                <NavItem divider />
                <NavItem>three</NavItem>
            </Dropdown>
      </div>
    );
  }
}

export default Navibar;

