import React, { Component } from 'react';
import './App.css';
import { NavItem, Dropdown, Button } from 'react-materialize';
import { ButtonToolbar, MenuItem, DropdownButton, Glyphicon} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { auth } from '../firebase.js';
// import DropdownMenu from "./DropdownMenu";

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

          :
            <p></p>
        }
      </div>
    );
  }
}

export default Navibar;

