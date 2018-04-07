import React, { Component } from 'react';
import { auth } from '../firebase.js';
import '../App.css';
import RecipeList from './RecipeList';
import { Row, Col } from 'react-materialize';
import Navibar from './Navibar';
import Login from './Login';
import MediaQuery from 'react-responsive';
import ChefBot from './ChefBot.js';

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
                    <Navibar user={this.state.user} logout={this.logout} />
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
                                    <ChefBot />
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