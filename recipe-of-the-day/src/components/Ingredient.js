import React from 'react';

const Ingredient = (props) => {

    const ingredients = props.ingredient;
    console.log(ingredients);

    return(

        <div className="Ingredient">

        <h3> {ingredients.Ingredient}</h3>
        <h3> {ingredients.amount} </h3>
        
        </div>
    )


}

export default Ingredient;