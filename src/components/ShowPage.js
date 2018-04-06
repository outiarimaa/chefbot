import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './Profile';
import ImageGallery from './ImageGallery';
import Header from './Header';

class ShowPage extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/images' component={ImageGallery}/>
                    <Route path='/' component={Header}/>
                </Switch>
            </main>
        );
    }
}



export default ShowPage;

