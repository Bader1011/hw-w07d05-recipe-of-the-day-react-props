import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RrecipeOfTheDay extends Component {

    renderIngredients() {

        const dataOfIngredients = recipeOfTheDay.ingredients.map((element, index) => {

            return (
                <Ingredient Ingredient={element} key={index}/>

            )
        })
        return dataOfIngredients
    };



    render() {
        return (

            <div className="mainHeader">

                <div className='dailyRecipeHeader'> RecipeOfTheDay
               
               
               
                <h3>Name:{recipeOfTheDay.name} </h3>
    
    
                

                <h3>Description:</h3>
                    <p> {recipeOfTheDay.description} </p>

                </div>


                <div className="Ingredients">
                    <h3> Ingredients: </h3>
                    <p>{this.renderIngredients()}</p>


                </div>
            </div>



        )

    }
}
export default RrecipeOfTheDay;