import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './Recipelist.css'

import firebase, { auth } from '../firebase.js';

export default class RecipeList extends React.Component {
    state = {
        recipes: [],
        recipesToShow: [],
        nameSearch: '',
        ingredientSearch: '',


        title: '',
        items: [],
        user: ''
    }

    handleChange_addToFavourites = (e) => {
        this.setState({
            [e.target.title]: e.target.title
        });
    }
    handleSubmit_addToFavourites = (e) => {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.title,
            user: this.state.user.displayName
        }
        itemsRef.push(item);
        this.setState({
            title: '',
            username: ''
        });
    }








    componentDidMount() {
        axios.get('/recipes')
            .then(res => {
                const recipes = res.data;
                this.setState({recipes: recipes});
            });
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

    handleSubmit_searchName = (event) => {
        event.preventDefault()
        this.setState({recipesToShow: this.state.recipes.filter(r => r.title.toLowerCase().includes(this.state.nameSearch.toLowerCase()))});
    }

    handleChange_searchName = (event) => {
        this.setState({nameSearch: event.target.value});
    }

    handleChange_searchIngredient = (event) => {
        this.setState({ingredientSearch: event.target.value});
    }

    handleSubmit_searchIngredient = (event) => {
        event.preventDefault();

        let lista = [];
        for(let i = 0; i < this.state.recipes.length; i++){
            for(let j = 0; j < this.state.recipes[i].extendedIngredients.length; j++){
                if(this.state.recipes[i].extendedIngredients[j].name.includes(this.state.ingredientSearch)){
                    lista.push(this.state.recipes[i]);
                }
            }
        }
        this.setState({recipesToShow: lista});
    }

    render() {
        console.log('mapataantaa', this.state.recipes);
       /*  let lista = this.state.recipes.map(r => <div key={r.title}>{r.title}</div>) */

        let hakutulos = this.state.recipesToShow.map(r =>
            <div className={'recipeDiv'}>
                {<b>{r.title}</b>}  <form onSubmit={this.handleChange_addToFavourites}>
                <Button className="formbutton" bsStyle="info" type={'submit'}>Add to favourites!</Button>
            </form><br/><br/>
                <img src={r.image} alt="pic" className={'recipeImage'}/> <br/><br/>
                {r.extendedIngredients.length} ingredients:
                <ul id="ingredient">
                    {r.extendedIngredients.map(i => <li>{i.originalString}</li>)}
                </ul>
                <div>
                    {r.analyzedInstructions[0].steps.map(steppi =>
                        <div key={steppi.step}>
                            {steppi.step}
                            <br/><br/>
                        </div>
                    )}
                </div>
            </div>
        )

        return (
            <div>
                <div className="boksi">
                    <form className={'formi'} onSubmit={this.handleSubmit_searchName}>
                        <label className={'nameLabel'}>Search for a recipe</label>
                        <input type="text" onChange={this.handleChange_searchName} value={this.state.nameSearch}/>
                        <Button className="formbutton" bsStyle="info" type={'submit'}>GO!</Button>
                    </form>
                </div>
                <div className="boksi2">
                    {hakutulos}
                </div>
            </div>
        );
    }
}

