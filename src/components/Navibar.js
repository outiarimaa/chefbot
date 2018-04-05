import React, { Component } from 'react';
import '../App.css';
import { NavItem, Dropdown, Button } from 'react-materialize';
import { auth } from '../firebase.js';

class Navibar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      user
      ? this.setState(() => ({ user }))
      : this.setState(() => ({ user: null }))
    });
  }

  render() {
    return (
      <div>
        {this.state.user 
          ?
            <Dropdown trigger={
                <Button>Profiili</Button>
            }>
              <NavItem>one</NavItem>
              <NavItem>two</NavItem>
              <NavItem divider />
              <NavItem onClick={this.props.logout}>logout</NavItem>
            </Dropdown>
          :
            <p>Jee, toimii, eli nyt voi renderöitä myös muissa componenteissa ja kattoo että onko user logged in vai out...Navibar.js esimerkki</p>
        }
      </div>
    );
  }
}

export default Navibar;

