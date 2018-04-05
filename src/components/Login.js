import React, {Component} from 'react';
import {Button} from 'react-materialize';
import {auth} from '../firebase.js';
import Navibar from "./Navibar";
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

            <div className='loginpage'>

                <div className="loginbuttons">
                    <Button waves='light' id='google-button' onClick={this.loginGoogle}>Login with Google</Button>
                    <Button waves='light' id='fb-button' onClick={this.loginFacebook}>Login with Facebook</Button>
                    <p>Please login in to use ChefBot</p>
                </div>

            </div>
        );
    }
}

export default Login;