import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './Profile';

class ShowPage extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/profile' component={Profile}/>
{/*                    <Route path='/roster' component={Roster}/>
                    <Route path='/schedule' component={Schedule}/>*/}
                </Switch>
            </main>
        );
    }
}



export default ShowPage;

