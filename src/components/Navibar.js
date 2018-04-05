import React, { Component } from 'react';
import '../App.css';
import { NavItem, Dropdown, Button } from 'react-materialize';
import { ButtonToolbar, MenuItem, DropdownButton, Glyphicon} from 'react-bootstrap';

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
      console.log('navissa', this.state.user);
    return (


      <div>
        {this.state.user 
          ?
            <div>
            <ButtonToolbar>
                <DropdownButton>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" onClick={this.props.logout}>Logout</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
                <p className="signin">Heippatirallaa {this.state.user.displayName}</p>
            </div>




          :
            <p></p>
        }
      </div>
    );
  }
}

export default Navibar;

