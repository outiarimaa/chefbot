import React, { Component } from 'react';
import '../App.css';
import { NavItem, Dropdown, Button } from 'react-materialize';
import { ButtonToolbar, MenuItem, DropdownButton, Glyphicon} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
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
                    <MenuItem eventKey="1"><Link to='/header'>Header</Link></MenuItem>
                    <MenuItem eventKey="1"><Link to='/profile'>Profile</Link></MenuItem>
                    <MenuItem eventKey="1"><Link to='/images'>Images</Link></MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" onClick={this.props.logout}>Logout</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
                <p className="signin">Tervetuloa {this.state.user.displayName}!</p>
{/*                <ul>
                    <li><Link to='/header'>Header</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/images'>Images</Link></li>
                </ul>*/}
            </div>




          :
            <p></p>
        }
      </div>
    );
  }
}

export default Navibar;

