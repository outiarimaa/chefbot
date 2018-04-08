import React, {Component} from 'react';
import {auth, googleProvider, facebookProvider} from '../firebase.js';
import './App.css';
import RecipeList from './RecipeList';
/* import { Grid, Row, Col } from 'react-bootstrap'; */
import {Row, Col} from 'react-materialize';
import Navibar from './Navibar';
import Login from './Login';
import {Button} from 'react-materialize';
import MediaQuery from 'react-responsive';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            user: null
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

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Navibar logout={this.logout}/>
                    {this.state.user ?
                        <div>
                            <div class="container-fluid bg-1 text-center">
                                <h3 id="cheftitle" class="margin">CHEF<br/>BOT</h3>
                                    {/*<h3>I'll help you to find delicious recipes!</h3>*/}
                            </div>

                            <div class="container-fluid bg-3 text-center">
                                <h3>Bla bla</h3><br/>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div className="Chefbot-div">
                                        <iframe
                                        title="chefbot"
                                        width="100%"
                                        height="100%"
                                        src="https://console.dialogflow.com/api-client/demo/embedded/69d0c8a7-3ee8-444a-afb5-a514fb6a3bf1">
                                        </iframe>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <p>Tähän reseptihaku?</p>
                                    </div>
                                </div>
                            </div>

                                    {/*<div>*/}
                                        {/*<div className="Chefbot-div">*/}
                                            {/*<iframe*/}
                                                {/*title="chefbot"*/}
                                                {/*width="100%"*/}
                                                {/*height="100%"*/}
                                                {/*src="https://console.dialogflow.com/api-client/demo/embedded/69d0c8a7-3ee8-444a-afb5-a514fb6a3bf1">*/}
                                            {/*</iframe>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<RecipeList/>*/}

                        </div>
                        :
                        <div>

                            <Login/>
                           {/* <div>

                                <Button waves='light' className='red' onClick={this.loginGoogle}>Login with
                                    Google</Button>
                                <Button waves='light' className='blue' onClick={this.loginFacebook}>Login with
                                    Facebook</Button>
                                <p>Loggaa sisään, niin näätki jotain</p>
                            </div>*/}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Header;