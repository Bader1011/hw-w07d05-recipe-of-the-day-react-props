import React , {Component}from 'react';
import '../App.css';
import recipes from '../data/recipes';
import Recipe from '../Recipe';
import { ReactComponent } from '*.svg';
//import RecipeOfTheDay from './RecipeOfTheDay';

class Recipes extends Component {
    renderRecipes() {

        const datarecipes=recipes.map((element, index) => {

            return (

                <Recipes allRecipes={element} key={index} />
            )



        })

        return datarecipes
    }
    render() {


        return (

            <div className='theHeader'>
                <h1 className='Recipe-header'> Recipes</h1>
                {this.renderRecipes()}
            </div>

        )
    }
}

export default recipes;