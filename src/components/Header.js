import React, { Component } from 'react';
import { auth } from '../firebase.js';
import '../App.css';
import RecipeList from './RecipeList';
import { Row, Col } from 'react-materialize';
import Login from './Login';
import MediaQuery from 'react-responsive';
import ChefBot from './ChefBot.js';
import Profile from './Profile.js';
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
                                <ButtonToolbar>
                                    <DropdownButton title="" id="dropdown">
                                    <MenuItem eventKey="1">
                                    <div>
                                        <div style={ shown } onClick={this.toggle.bind(this)}>Profile</div>
                                        <div style={ hidden } onClick={this.toggle.bind(this)}>Home</div>
                                    </div>
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="2" onClick={this.logout}>Logout</MenuItem>
                                    </DropdownButton>
                                </ButtonToolbar>
                                <p className="signin">Tervetuloa {this.state.user.displayName}!</p>
                            </div>

                            <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
                                <div>You are a desktop or laptop</div>
                                <MediaQuery minDeviceWidth={1824}>
                                    <div>You also have a huge screen</div>
                                </MediaQuery>
                                <MediaQuery maxWidth={1224}>
                                    <div>You are sized like a tablet or mobile phone though</div>
                                </MediaQuery>
                            </MediaQuery>

                            <div style={ shown }>
                                <Row id="aleksi">
                                    <Col s={6} className='left-column'>
                                        <ChefBot />
                                    </Col>
                                    <Col s={6} className='right-column'>
                                        <RecipeList />
                                    </Col>
                                </Row>
                            </div>
                            <div style={ hidden }>
                                <Profile state={this.state} />
                            </div>
                        </div>
                        :
                        <div>
                            <Login />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Header;