import React from 'react';
import axios from 'axios';
import './Recipelist.css'

export default class RecipeList extends React.Component {
    state = {
        recipes: [],
        recipesToShow: [],
        nameSearch: '',
        ingredientSearch: ''
    }

    componentDidMount() {
        axios.get('/recipes')
            .then(res => {
                const recipes = res.data;
                this.setState({recipes: recipes});
            })
    }

    handleSubmit_searchName = (event) => {
        event.preventDefault()
        this.setState({recipesToShow: this.state.recipes.filter(r => r.title.toLowerCase().includes(this.state.nameSearch.toLowerCase()))})
    }

    handleChange_searchName = (event) => {
        this.setState({nameSearch: event.target.value})
    }



    handleChange_searchIngredient = (event) => {
        this.setState({ingredientSearch: event.target.value})
    }

    handleSubmit_searchIngredient = (event) => {
        event.preventDefault()

        let lista = [];
        for(let i = 0; i < this.state.recipes.length; i++){
            for(let j = 0; j < this.state.recipes[i].extendedIngredients.length; j++){
                if(this.state.recipes[i].extendedIngredients[j].name.includes(this.state.ingredientSearch)){
                    lista.push(this.state.recipes[i])
                }
            }
        }

        this.setState({recipesToShow: lista})
    }



    render() {
        let lista = this.state.recipes.map(r => <div>{r.title}</div>)

        let hakutulos = this.state.recipesToShow.map(r =>
            <div className={'recipeDiv'}>
                {<b>{r.title}</b>} <br/><br/>
                <img src={r.image} alt="pic" className={'recipeImage'}/> <br/><br/>
                {r.extendedIngredients.length} ingredients:
                <ul>
                    {r.extendedIngredients.map(i => <li>{i.originalString}</li>)}
                </ul>
                <div>
                    {r.analyzedInstructions[0].steps.map(steppi =>
                        <div>
                            {steppi.step}
                            <br/><br/>
                        </div>
                    )}
                </div>
            </div>
        )


        return (
            <div>
                <div className={'boksi'}>
                    <b>All recipes</b> <br/><br/>
                    {lista}
                </div>

                <div className="boksi">
                    <form className={'formi'} onSubmit={this.handleSubmit_searchName}>
                        <label className={'nameLabel'}>Search by name</label>
                        <input type="text" onChange={this.handleChange_searchName} value={this.state.nameSearch}/>
                        <button type={'submit'}>search</button>
                    </form>

                    <form className={'formi'} onSubmit={this.handleSubmit_searchIngredient}>
                        <label className={'recipeLabel'}>Search by ingredient</label>
                        <input type="text" onChange={this.handleChange_searchIngredient} value={this.state.ingredientSearch}/>
                        <button type={'submit'}>search</button>
                    </form>

                </div>

                <div className="boksi">
                    {hakutulos}
                </div>

            </div>

        )
    }
}

