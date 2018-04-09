import React, { Component } from 'react';
import { Row } from 'react-materialize';
import firebase, { auth, provider } from '../firebase.js';
import './App.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: '',
            items: [],
            user: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.currentItem,
            user: this.state.user.displayName || this.state.user.email
        }
        itemsRef.push(item);
        this.setState({
            currentItem: '',
            username: ''
        });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
              this.setState({ user });
            } 
          });
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].title,
                    user: items[item].user
                });
            }
            this.setState({
                items: newState
            });
        });
    }
/*    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }*/
    render() {
        const user = this.props.state.user;
        console.log('Profiilipage', user);
        return (
            <Row id="aleksi">
                <div>
                    <h1>Profile for {user.displayName}</h1>
                    <h3>Basic information</h3>
                    <p>Username: {user.displayName}</p>
                    {(user.email && <p>Email: {user.email}</p>) || <p>Email: botlover@gmail.com</p>}
                    <h3>Food allergies</h3>
                    <section className='display-item'>
                       <div className="wrapper">
                           <ul>
                               {this.state.items.map((item) => {
                                   return (
                                       <li key={item.id}>
                                           <p>{item.title}</p>

                                       </li>
                                   )
                               })}
                           </ul>
                       </div>
                    </section>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="currentItem" placeholder="What are you allergic to?" onChange={this.handleChange} />
                        <button>Add allergy</button>
                    </form>

                </div>                                   
            </Row>    
        );
    }
}

export default Profile;