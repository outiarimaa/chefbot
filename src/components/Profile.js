import React, { Component } from 'react';
import { Row } from 'react-materialize';
import firebase, { auth } from '../firebase.js';
import './Profile.css';
import { Button } from 'react-bootstrap';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: '',
            items: [],
            user: '',

            fav: [],
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
            user: this.state.user.displayName
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


        const favRef = firebase.database().ref('fav');
        favRef.on('value', (snapshot) => {
            let fav = snapshot.val();
            let newState = [];
            for (let item in fav) {
                newState.push({
                    id: item,
                    title: fav[item].title,
                    user: fav[item].user
                });

            }
            this.setState({
                fav: newState
            });
        });

    }




    render() {
        const user = this.props.state.user;
        console.log('Profiilipage', this.state.fav);
        return (
            <Row id="profile">
                <a><img id="kuva" src="http://i961.photobucket.com/albums/ae99/ofwdatabasekano/Female%20Chef_zpseexxr0yr.gif" border="0" alt="Female Chef"></img></a>
                <div>
                    <h1>Profile for {user.displayName}</h1>
                    <h3>Basic Information</h3>
                    <p className="reunateksti">Username: {user.displayName}</p>
                    {(user.email && <p>Email: {user.email}</p>) || <p>Email: botlover@gmail.com</p>}
                    <h3>Favourite Dishes </h3>
                    <section className='display-item reunateksti'>
                        <div className="wrapper">
                            <ul>
                                {this.state.fav.map((item) => {

                                    return (
                                        <ul key={item.id}>
                                            <li>
                                                {item.user === this.state.user.displayName ?
                                                    item.title : null}
                                            </li>
                                        </ul>
                                    )
                                })}
                            </ul>
                        </div>
                    </section>
                    <h3>Food Allergies/Dislikes</h3>
                    <section className='display-item reunateksti'>
                       <div className="wrapper">
                           <ul>
                               {this.state.items.map((item) => {

                                   return (
                                       <ul key={item.id}>
                                          <li>
                                               {item.user === this.state.user.displayName ?
                                                   item.title : null}
                                           </li>
                                       </ul>
                                   )
                               })}
                           </ul>
                       </div>
                    </section>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="currentItem" placeholder="What are you allergic to?" onChange={this.handleChange} />
                        <Button className="formbutton" bsStyle="info" type={'submit'}>Add allergy</Button>
                    </form>


                </div>                                   
            </Row>
        );
    }
}

export default Profile;