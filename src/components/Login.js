import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { auth } from '../firebase.js';
import Navibar from "./Navibar";

class Login extends Component {
    render() {
        return (

            <div>


                    <div>
                        <Button waves='light' className='red' onClick={this.props.omanimi}>Login with Google</Button>
                        <Button waves='light' className='blue' onClick={this.loginFacebook}>Login with Facebook</Button>
                        <p>Loggaa sisään, niin näätki jotain</p>
                    </div>

                    <p>Jee, toimii, eli nyt voi renderöitä myös muissa componenteissa ja kattoo että onko user logged in vai out...Navibar.js esimerkki</p>


            </div>
        );
    }
}

export default Login;