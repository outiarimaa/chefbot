{/*import React, { Component } from 'react';*/}
{/*import './App.css';*/}
{/*import { NavItem, Dropdown, Button } from 'react-materialize';*/}
{/*import { ButtonToolbar, MenuItem, DropdownButton, Glyphicon} from 'react-bootstrap';*/}
{/*import {BrowserRouter, Route, Link} from 'react-router-dom';*/}
{/*import { auth } from '../firebase.js';*/}
{/*// import DropdownMenu from "./DropdownMenu";*/}
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
                <nav class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" onClick={this.props.logout}>Logout</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#">TALK TO ME!</a></li>
                                <li><a href="#">PHOTOGALLERY</a></li>
                                <li><a href="#">PROFILE</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

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

