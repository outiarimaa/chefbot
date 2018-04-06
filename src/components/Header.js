import React, { Component } from 'react';
import { auth } from '../firebase.js';
import '../App.css';
import RecipeList from './RecipeList';
import { Row, Col } from 'react-materialize';
import Navibar from './Navibar';
import Login from './Login';
import MediaQuery from 'react-responsive';

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
                    <Navibar logout={this.logout} />
                    {this.state.user ?
                        <div>
                        <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
                            <div>You are a desktop or laptop</div>
                            <MediaQuery minDeviceWidth={1824}>
                                <div>You also have a huge screen</div>
                            </MediaQuery>
                            <MediaQuery maxWidth={1224}>
                                <div>You are sized like a tablet or mobile phone though</div>
                            </MediaQuery>
                        </MediaQuery>

                            <Row id="aleksi">
                                <Col s={6} className='left-column'>
                                    <div>
                                        <a className="toggle-a" onClick={this.toggle.bind(this)}>
                                            <img className="toggleimage" alt="chefbot" src="http://fileserver.imagebucket.net/i/00000/5nnvtdsihay4_t.jpg" />
                                        </a>
                                        <p>Show/Hide</p>
                                       {/*  <button onClick={this.toggle.bind(this)}>ChecBot</button> */}
                                        <div style={ shown }>
                                            <div className="Chefbot-div">
                                                <iframe
                                                    title="chefbot"
                                                    width="100%"
                                                    height="100%"
                                                    src="https://console.dialogflow.com/api-client/demo/embedded/69d0c8a7-3ee8-444a-afb5-a514fb6a3bf1">
                                                </iframe>
                                            </div>
                                        </div>
                                        <div style={ hidden }></div>
                                    </div>
                                </Col>
                                <Col s={6} className='right-column'>
                                    <RecipeList />
                                </Col>
                            </Row>
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