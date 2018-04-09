import React, {Component} from 'react';
import {Button} from 'react-materialize';
import {auth} from '../firebase.js';
import {facebookProvider, googleProvider} from "../firebase";
import './Login.css';

class Login extends Component {
    loginGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    loginFacebook = () => {
        auth.signInWithPopup(facebookProvider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    render() {
        return (

            <div className='container'>
                <div className='row'>

                    <div className='col-lg-12'>
                        <div className='introduction'>
                            <h1>Welcome to ChefBot</h1>
                            <img alt=" " className="picture"
                                 src="http://fileserver.imagebucket.net/i/00000/5nnvtdsihay4_t.jpg" />
                            <p>ChefBot is an intelligent chatbot, who can help you to find delicious recipes from a vast
                                recipe database. ChefBot is still a child and keeps on learning in order to serve you
                                better.</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='signin'>
                            <div className="loginbuttons">
                                <div><Button waves='light' id='google-button' onClick={this.loginGoogle}>Login with
                                    Google</Button></div>
                                <br/>
                                <div><Button waves='light' id='fb-button' onClick={this.loginFacebook}>Login with
                                    Facebook</Button></div>
                                <p>Please log in to use ChefBot</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;