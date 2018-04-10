import React, {Component} from 'react';
import {auth, googleProvider, facebookProvider} from '../firebase.js';
import './App.css';
import RecipeList from './RecipeList';
import { Row, Col } from 'react-materialize';
import Login from './Login';
import MediaQuery from 'react-responsive';
import ChefBot from './ChefBot.js';
import Profile from './Profile.js';
import { Grid, Thumbnail, Image } from 'react-bootstrap';
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
                                        <button type="button" className="navbar-toggle" data-target="#myNavbar">
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
                                <div className="wrap">
                                    <div id="sidebar-left">
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
                            <div id="main-content">
                                <div>
                                    <div class="container-fluid bg-1 text-center">
                                        <h3 id="cheftitle">CHEF<br/>BOT</h3>
                                        </div>

                                    {/*<div class="container-fluid bg-5 text-center">*/}
                                        {/*<h2 id="whoiscb">Story of ChefBot</h2>*/}
                                        {/*<p id="storycb">ChefBot is an intelligent chatbot, who can help <br/>*/}
                                            {/*you to find delicious <br/>*/}
                                            {/*recipes from a vast recipe database. <br/>*/}
                                            {/*ChefBot is still a child and keeps on <br/>*/}
                                            {/*learning in order to serve you better.</p>*/}
                                    {/*</div>*/}



                        <div class="container-fluid bg-2 text-center">

                            <p id="favtitle">Our all-time favorites</p>
                            <Grid className="testi">
                                <Row>
                                    <Col xs={6} md={5}>
                                        <a href="#johanna" data-toggle="collapse">
                                            <Image src="https://images.pexels.com/photos/46247/thai-food-noodle-fried-noodles-meal-46247.jpeg?cs=srgb&dl=chopsticks-cuisine-dinner-46247.jpg&fm=jpg" circle width="200" height="120"/></a>
                                        <div id="johanna" class="collapse">
                                            <h4>Johanna<br/>
                                            My favorite is<br/>
                                            chicken wok!</h4>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={5}>
                                        <a href="#juukeli" data-toggle="collapse">
                                        <Image src="https://img.taste.com.au/NtQQVTyu/taste/2016/11/gluten-free-lasagne-93960-1.jpeg" circle width="200" height="120" /></a>
                                        <div id="juukeli" class="collapse">
                                            <h4>Juuso<br/>
                                                I love<br/>
                                                lasagne!</h4>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={5}>
                                        <a href="#outi" data-toggle="collapse">
                                        <Image src="https://images.pexels.com/photos/262982/pexels-photo-262982.jpeg?cs=srgb&dl=cooking-cuisine-delicious-262982.jpg&fm=jpg" circle width="200" height="120" /></a>
                                        <div id="outi" class="collapse">
                                            <h4>Outi<br/>
                                                My favorite<br/>is soy<br/>
                                                glazed salmon!</h4>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={5}>
                                        <a href="#aleksi" data-toggle="collapse">
                                        <Image src="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?cs=srgb&dl=blur-close-up-cooking-723198.jpg&fm=jpg" circle width="200" height="120" /></a>
                                        <div id="aleksi" class="collapse">
                                            <h4>Allu<br/>
                                                turpa kiinni</h4>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={5}>
                                        <a href="#jani" data-toggle="collapse">
                                        <Image src="https://images.pexels.com/photos/722670/spaghetti-bolognese-food-rustic-722670.jpeg?cs=srgb&dl=board-bolognese-carbohydrates-722670.jpg&fm=jpg" circle width="200" height="120" /></a>
                                        <div id="jani" class="collapse">
                                            <h4>Jani<br/>
                                                I love<br/>
                                                spaghetti bolognese!</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                                    <div class="container-fluid bg-4 text-center">
                                        <RecipeList/>

                                    </div>

                                    <div class="container-fluid bg-6 text-center">
                                        <h3 class="margin">Recommended recipes</h3><br/>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <p>SALMON SASHIMI</p>
                                                <img src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?cs=srgb&dl=asian-food-bowl-chopsticks-628776.jpg&fm=jpg" class="img-responsive margin" alt="Image"/>
                                            </div>
                                            <div class="col-sm-4">
                                                <p>AVOCADO TOAST</p>
                                                <img src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?cs=srgb&dl=appetizer-avocado-bread-566566.jpg&fm=jpg" class="img-responsive margin" alt="Image"/>
                                            </div>
                                            <div class="col-sm-4">
                                                <p>BUTTERSQUASH SOUP</p>
                                                <img src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?cs=srgb&dl=appetizer-bowl-bread-539451.jpg&fm=jpg" class="img-responsive margin" alt="Image"/>
                                            </div>
                                        </div>
                                    </div>
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