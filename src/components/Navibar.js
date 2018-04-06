import React, { Component } from 'react';
import '../App.css';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';
import { Link} from 'react-router-dom';
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
                    <MenuItem eventKey="1"><Link to='/'>Header</Link></MenuItem>
                    <MenuItem eventKey="2"><Link to='/profile'>Profile</Link></MenuItem>
                    <MenuItem eventKey="3"><Link to='/images'>Images</Link></MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" onClick={this.props.logout}>Logout</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
                <p className="signin">Tervetuloa {this.state.user.displayName}!</p>
            </div>
          :
            ''
        }
      </div>
    );
  }
}

export default Navibar;

