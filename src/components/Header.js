import React, {Component} from 'react';
import {auth, googleProvider, facebookProvider} from '../firebase.js';
import './App.css';
import RecipeList from './RecipeList';
import { Row, Col } from 'react-materialize';
import Login from './Login';
import MediaQuery from 'react-responsive';
import ChefBot from './ChefBot.js';
import Profile from './Profile.js';
import Navibar from './Navibar';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            user: null,
            shown: true
        }
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            }
        });
    }

render() {
    let shown = {
        display: this.state.shown ? "block" : "none"
    };
    
    let hidden = {
        display: this.state.shown ? "none" : "block"
    }
    return (
        <div>
            <div>
                {this.state.user ?
                    <div>
                        <div>
                            <nav class="navbar navbar-default">
                                <div class="container">
                                    <div class="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand" onClick={this.logout}>Logout</a>
                                    </div>
                                    <div className="collapse navbar-collapse" id="myNavbar">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li>
                                                <div>
                                                    <div className="toggle-home-profile" style={ shown } onClick={this.toggle.bind(this)}>Profile</div>
                                                    <div className="toggle-home-profile" style={ hidden } onClick={this.toggle.bind(this)}>Home</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div style={ shown }>
                                <div class="sidenav">
                                    <div className="Chefbot-div">
                                        <iframe
                                            title="chefbot"
                                            width="90%"
                                            height="100%"
                                            src="https://console.dialogflow.com/api-client/demo/embedded/69d0c8a7-3ee8-444a-afb5-a514fb6a3bf1">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={ shown }>
                            <div className="main">
                                <div>
                                    <div class="container-fluid bg-1 text-center">
                                        <h3 id="cheftitle">CHEF<br/>BOT</h3>
                                    </div>
                                    <div class="container-fluid bg-3 text-center">
                                        <p>Our all-time favorites</p>
                                    </div>
                            <div class="container-fluid bg-2">
                                <RecipeList/>
                            </div>
                        </div>
                    </div>
                </div>
                    <div style={ hidden }>
                    <Profile state={this.state} />
                    </div>        
                </div>
                :
                    <div>
                        <Login/>
                    </div>
                }
            </div>
        </div>
    );
}
}

export default Header;