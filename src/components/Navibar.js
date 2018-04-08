/* import React, { Component } from 'react';
import '../App.css';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class Navibar extends Component {

  render() {
      console.log('navissa', this.props.user);
    return (
      <div>
        {this.props.user 
          ?
            <div>
              <ButtonToolbar>
                <DropdownButton>
                  <MenuItem eventKey="1"><Link to='/'>Home</Link></MenuItem>
                  <MenuItem eventKey="1"><Link to='/profile'>Profile</Link></MenuItem>
                  <MenuItem eventKey="1"><Link to='/images'>Images</Link></MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4" onClick={this.props.logout}>Logout</MenuItem>
                </DropdownButton>
              </ButtonToolbar>
              <p className="signin">Tervetuloa {this.props.user.displayName}!</p>
            </div>
          :
            ''
        }
      </div>
    );
  }
}

export default Navibar; */

