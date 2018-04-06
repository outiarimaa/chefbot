import React, {Component} from 'react';
import { ButtonToolbar, MenuItem, DropdownButton, Glyphicon} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import DropdownMenu from "./DropdownMenu";
import {auth, googleProvider, facebookProvider} from '../firebase.js';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            user
                ? this.setState(() => ({ user }))
                : this.setState(() => ({ user: null }))
        });
    }

    render() {

        return (
            <div>
                <h1>Proffiili</h1>
                <DropdownMenu />

            </div>

        );
    }
}

export default Profile;
