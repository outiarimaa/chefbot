import React, {Component} from 'react';
import { ButtonToolbar, MenuItem, DropdownButton, Glyphicon} from 'react-bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import DropdownMenu from "./DropdownMenu";

class Profile extends Component {

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
