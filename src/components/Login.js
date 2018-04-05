import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { auth } from '../firebase.js';
import Navibar from "./Navibar";
import {facebookProvider, googleProvider} from "../firebase";

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

            <div>


                    <div>
                        <Button waves='light' className='red' onClick={this.loginGoogle}>Login with Google</Button>
                        <Button waves='light' className='blue' onClick={this.loginFacebook}>Login with Facebook</Button>
                        <p>Loggaa sisään, niin näätki jotain</p>
                    </div>

                    <p>Jee, toimii, eli nyt voi renderöitä myös muissa componenteissa ja kattoo että onko user logged in vai out...Navibar.js esimerkki</p>


            </div>
        );
    }
}

export default Login;