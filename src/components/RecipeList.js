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

        currentItem: '',
        fav: [],
        user: ''

    }

    handleChange_addToFavourites = (e) => {
        console.log('handlechange', e.target.currentItem.value);
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log('target.name', e.target.name);
    }
    handleSubmit_addToFavourites = (e) => {
        console.log('handlesumbit', e.target.currentItem.value);
        e.preventDefault();
        const itemsRef = firebase.database().ref('fav');
        const item = {
            title: e.target.currentItem.value,
            user: this.state.user.displayName
        }
        itemsRef.push(item);
        this.setState({
            currentItem: '',
            username: ''
        });
    }

    // handleChange_addToFavourites = (e) => {
    //     console.log('handlechangevittu', e.target.favouriteRecipe.value);
    //     this.setState({
    //         [e.target.name]: e.target.favouriteRecipe.value
    //     });
    // }
    // handleSubmit_addToFavourites = (e) => {
    //     console.log('handlesubmit', e.target);
    //     e.preventDefault();
    //     const favRecipesRef = firebase.database().ref('favRecipes');
    //     const favRecipes = {
    //         favouriteRecipe: this.state.favouriteRecipe
    //     }
    //     favRecipesRef.push(favRecipes);
    //     this.setState({
    //         favouriteRecipe: ''
    //     });
    // }

    componentDidMount() {
        axios.get('/recipes')
            .then(res => {
                const recipes = res.data;
                this.setState({recipes: recipes});
            });
        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         this.setState({ user });
        //     }
        // });
        // const favRecipesRef = firebase.database().ref('favRecipes');
        // favRecipesRef.on('value', (snapshot) => {
        //     let favRecipes = snapshot.val();
        //     let newState = [];
        //     for (let recipe in favRecipes) {
        //         newState.push({
        //             title: favRecipes[recipe].favouriteRecipe
        //
        //         });
        //     }
        //     this.setState({
        //         favRecipes: newState
        //     });
        // });
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
        const itemsRef = firebase.database().ref('fav');
        itemsRef.on('value', (snapshot) => {
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
                {<b>{r.title}</b>}
                <form onSubmit={this.handleSubmit_addToFavourites}>
                    <input type="hidden" name="currentItem" onChange={this.handleChange_addToFavourites} defaultValue={r.title}></input>
                    <Button className="formbutton" bsStyle="info" type={'submit'}>Add to favourites!</Button>
                </form>
                <br/><br/>
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

                    <form className="formi" onSubmit={this.handleSubmit_searchName}>
                        <h3 id="ask">Ask<br/>ChetBot<br/> for a recipe!</h3>
                        {/*<label className={'nameLabel'}>First,<br/> ask ChefBot for a recipe</label><br/>*/}
                        <input type="text" name="search" placeholder="Search for recipes!" onChange={this.handleChange_searchName} value={this.state.nameSearch}/><br/>
                        {/*<input type="text" onChange={this.handleChange_searchName} value={this.state.nameSearch}/>*/}

                        <Button className="formbutton" bsStyle="info" type={'submit'}>GO!</Button>
                        <Button className="botbutton" bsStyle="info" type={'submit'}>Get from BOT!</Button>
                    </form>
                </div>
                <div className="boksi2">
                    {hakutulos}
                </div>
            </div>
        );
    }
}

